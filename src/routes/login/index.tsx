// @ts-nocheck
import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { type D1Database } from "@cloudflare/workers-types";

export const useGetDb = routeLoader$(async (thing) => {
	const db = thing.platform.env.DB_USERS as D1Database;
	const test = await db.prepare("SELECT * FROM Users").all();

	console.log("fuck you", test);
});

export default component$(() => {
	const action = useGetDb();

	return <div>Login {action || "egg"}</div>;
});
