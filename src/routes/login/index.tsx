// @ts-nocheck
import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { type D1Database } from "@cloudflare/workers-types";

export const useGetDb = routeLoader$((thing) => {
	console.log("fuck you", thing);
});

export default component$(() => {
	const action = useGetDb();

	return <div>Login {action || "egg"}</div>;
});
