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
export const getDb = async (
	platform?: PlatformCloudflarePages,
): Promise<D1Database> => {
	if (platform?.env?.DB) return platform.env.DB;

	if (!cacheDb && import.meta.env.DEV) {
		const { D1Database, D1DatabaseAPI } = await import("@miniflare/d1");
		const { createSQLiteDB } = await import("@miniflare/shared");
		// TODO: Use fs or something to get the path to the DB file in a less brittle manner
		const sqliteDb = await createSQLiteDB(
			".wrangler/state/v3/d1/330f7ceb-868c-45c5-8134-d00bb881744d/db.sqlite",
		);
		cacheDb = new D1Database(new D1DatabaseAPI(sqliteDb));
	}
	return cacheDb;
};
