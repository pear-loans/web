import { component$ } from "@builder.io/qwik";
import { routeAction$, routeLoader$ } from "@builder.io/qwik-city";
import type { ProfileData } from "~/config/db";
import { FIELDS } from "~/config/db";
import { getHandler, useAuthSession } from "~/routes/plugin@auth";
import { isValidSession } from "~/utils/is-valid-session";
import Login from "~/views/account/login";
import Onboard from "~/views/account/onboard";
import Profile, { routeActionAddProfile, routeLoaderProfile } from "~/views/account/profile";

export const onGet = getHandler;

const isEmptyProfile = (profile: ProfileData) => {
	return Object.values(FIELDS).some((field) => {
		// @ts-ignore - TODO: Figure out type error. Keys of FIELDS guaranteed to be in ProfileData (it is derived from ProfileData)
		return !profile[field];
	});
};

export const useAddProfile = routeAction$((...args) => {
	return routeActionAddProfile(...args);
});
export const useAccountData = routeLoader$((...args) => {
	return routeLoaderProfile(...args);
});

const getView = ({ data: { profile, session }, action: { addProfile } }) => {
	if (isValidSession(session) && profile?.[FIELDS.ID]) {
		if (isEmptyProfile(profile) && !addProfile.value?.errors.length) {
			return <Onboard data={{ profile: profile, session: session }} action={{ addProfile }} />;
		} else {
			return <Profile data={{ profile: profile, session: session }} />;
		}
	} else {
		return <Login />;
	}
};

export default component$(() => {
	const addProfile = useAddProfile();
	const session = useAuthSession();
	const profile = useAccountData();

	const profileData = { ...addProfile.value, ...profile.value };

	return getView({
		data: { profile: profileData, session: session.value },
		action: { addProfile }
	});
});
