import { component$ } from "@builder.io/qwik";
import { routeAction$, routeLoader$ } from "@builder.io/qwik-city";
import { getHandler, useAuthSession } from "~/routes/plugin@auth";
import { isValidSession } from "~/utils/is-valid-session";
import Login from "~/views/account/login";
import Profile, { routeActionAddProfile, routeLoaderProfile } from "~/views/account/profile";

export const onGet = getHandler;

export const useAddProfile = routeAction$((...args) => {
	return routeActionAddProfile(...args);
});
export const useAccountData = routeLoader$((...args) => {
	return routeLoaderProfile(...args);
});

export default component$(() => {
	const session = useAuthSession();
	const profile = useAccountData();
	return isValidSession(session.value) && profile.value.userId ? (
		// @ts-ignore - TODO: Figure out type error.
		<Profile data={{ profile: profile.value, session: session.value }} />
	) : (
		<Login />
	);
});
