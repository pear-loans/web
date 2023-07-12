// @ts-nocheck
import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { type D1Database } from "@cloudflare/workers-types";

export const useGetDb = routeLoader$(({ platform }) => {
	const { DB_USERS } = platform as { DB_USERS: D1Database };
	console.log(DB_USERS);
});

export default component$(() => {
	const action = useGetDb();

	return <div>Login {action || "egg"}</div>;
});
