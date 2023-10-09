import { type PlatformCloudflarePages } from "@builder.io/qwik-city/middleware/cloudflare-pages";
import { type D1Database } from "@miniflare/d1";

let cacheDb: D1Database;

/**
 * Needed (for now) for Local Dev vs Cloudflare deployment.
 * When running locally, we use the @miniflare/d1 package to read/write to a local SQLite database.
 * When running on Cloudflare, the platform object provides the DB instance.
 *
 * Running the package.json "preview" also provides the DB instance in the platform object, but this is slower (must build and
 * run wrangler cli each time).
 */
export const getDb = async (platform?: PlatformCloudflarePages): Promise<D1Database> => {
	if (platform?.env?.DB) return platform.env.DB;

	if (import.meta.env.DEV) {
		if (!cacheDb) {
			const { D1Database, D1DatabaseAPI } = await import("@miniflare/d1");
			const { createSQLiteDB } = await import("@miniflare/shared");
			// TODO: Use fs or something to get the path to the DB file in a less brittle manner
			const sqliteDb = await createSQLiteDB(
				".wrangler/state/v3/d1/miniflare-D1DatabaseObject/bc371a0427010248cf1ecc49f2e2b37a420bca8a4f37484111179ce6a4a59538.sqlite"
			);
			cacheDb = new D1Database(new D1DatabaseAPI(sqliteDb));
		}
	}
	return cacheDb;
};
