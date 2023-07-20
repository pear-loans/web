import { component$ } from "@builder.io/qwik";
import { routeAction$, routeLoader$ } from "@builder.io/qwik-city";

import Login from "~/components/routes/account/login";
import Account from "~/components/routes/account/profile";
import { getDb } from "~/db";
import { getHandler, useAuthSession } from "~/routes/plugin@auth";
import { isValidSession } from "~/utils/is-valid-session";

export const onGet = getHandler;

export const ERRORS = {
	MISSING_INPUT: "MISSING_INPUT",
	UNEXPECTED: "UNEXPECTED",
};

export const useAddProfile = routeAction$(async (data, requestEvent) => {
	if (!data.name || !data.school) return { errors: [ERRORS.MISSING_INPUT] };

	const db = await getDb(requestEvent.platform);
	try {
		db.prepare(
			"INSERT INTO profiles (user_id, full_name, school) VALUES (?1,?2,?3) ON CONFLICT (user_id) DO UPDATE SET full_name = EXCLUDED.full_name, school = EXCLUDED.school",
		)
			.bind(data.id, data.name, data.school)
			.run();

		return {
			profile: {
				full_name: data.name,
				school: data.school,
			},
			errors: [],
		};
	} catch (e) {
		return { errors: [ERRORS.UNEXPECTED] };
	}
});

export const useAccountData = routeLoader$(async (requestEvent) => {
	const session = await requestEvent.resolveValue(useAuthSession);
	if (!session || !session.user?.id) return;

	const base64id = btoa(session.user.id);

	const db = await getDb(requestEvent.platform);
	const profile = await db
		.prepare("SELECT * FROM profiles WHERE user_id = ?")
		.bind(base64id)
		.first();

	if (!profile) {
		return { userId: base64id, profile: null };
	} else {
		return { userId: base64id, profile };
	}
});

export default component$(() => {
	const session = useAuthSession();
	const profile = useAccountData();

	return isValidSession(session?.value) ? (
		<Account data={profile.value} />
	) : (
		<Login />
	);
});
