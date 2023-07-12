// @ts-nocheck
import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";

export const useGetDb = routeLoader$(async ({ platform }) => {
	const { DB_USERS } = platform;
	const { results } = await DB_USERS.prepare("SELECT * FROM Users").all();
	cconsole.log(results);
	return "default";
});

export default component$(() => {
	const action = useGetDb();

	return <div>Login {action || "egg"}</div>;
});
