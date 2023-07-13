let getDevDb = () => {};
import { type D1Database } from "@miniflare/d1";

if (import.meta.env.DEV) {
	const { D1Database, D1DatabaseAPI } = await import("@miniflare/d1");
	const { createSQLiteDB } = await import("@miniflare/shared");

	let devDb: D1Database;

	getDevDb = async () => {
		if (!devDb) {
			const sqlLite = await createSQLiteDB(
				".wrangler/state/v3/d1/330f7ceb-868c-45c5-8134-d00bb881744d/db.sqlite",
			);
			devDb = new D1Database(new D1DatabaseAPI(sqlLite));
		}
		return devDb;
	};
}

const getDb = async (platformEnvDb: D1Database) => {
	if (platformEnvDb) {
		return platformEnvDb;
	}

	return getDevDb();
};

export default getDb;
