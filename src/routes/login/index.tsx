import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { D1Database } from "@cloudflare/workers-types";

import getDb from "~/db";
import { type User } from "~/types/db";

export const useGetDb = routeLoader$(async ({ platform: { env } }) => {
	const db = (await getDb(env?.DB)) as D1Database;
	const { results } = await db.prepare("SELECT * FROM Users").all<User>();
	// @ts-ignore
	return results[0].Platform;
});

export default component$(() => {
	const action = useGetDb();

	return <div>Login {action}</div>;
});
