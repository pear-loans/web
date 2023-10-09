import { useAuthSession } from "~/routes/plugin@auth";
import { getDb } from "~/tmp/db";

import type { RequestEventAction, RequestEventLoader } from "@builder.io/qwik-city";
import type { Session } from "~/routes/plugin@auth";
import { parse } from "~/utils/json";
import { INVALID_STRING } from "~/utils/validate";

export const FIELDS = {
	ID: "user_id",
	FULL_NAME: "full_name",
	SCHOOL: "school",
	FIELDS_OF_STUDY: "fields_of_study"
};

export const ERRORS = {
	INVALID_INPUT: "INVALID_INPUT",
	MISSING_INPUT: "MISSING_INPUT",
	UNEXPECTED: "UNEXPECTED"
};

export const routeActionAddProfile = async (data: any, requestEvent: RequestEventAction) => {
	if (!data[FIELDS.FULL_NAME] || !data[FIELDS.SCHOOL] || !data[FIELDS.FIELDS_OF_STUDY]?.length)
		return { errors: [ERRORS.MISSING_INPUT] };

	if (
		Object.keys(data).some((key) => {
			if (key === FIELDS.ID) return false;
			const value = data[key];
			if (typeof value === "string") return INVALID_STRING(value);
			if (Array.isArray(value)) return value.some((value) => INVALID_STRING(value));
		})
	)
		return { errors: [ERRORS.INVALID_INPUT] };

	const db = await getDb(requestEvent.platform);
	try {
		db.prepare(
			"INSERT INTO profiles (user_id, full_name, school, fields_of_study) VALUES (?1,?2,?3,?4) ON CONFLICT (user_id) DO UPDATE SET full_name = EXCLUDED.full_name, school = EXCLUDED.school"
		)
			.bind(
				data[FIELDS.ID],
				data[FIELDS.FULL_NAME],
				data[FIELDS.SCHOOL],
				JSON.stringify(data[FIELDS.FIELDS_OF_STUDY]) || ""
			)
			.run();

		return {
			profile: {
				full_name: data[FIELDS.FULL_NAME],
				school: data[FIELDS.SCHOOL],
				fields_of_study: data[FIELDS.FIELDS_OF_STUDY]
			},
			errors: []
		};
	} catch (e) {
		console.error(e);
		return { errors: [ERRORS.UNEXPECTED] };
	}
};

export const routeLoaderProfile = async (requestEvent: RequestEventLoader) => {
	const session = (await requestEvent.resolveValue(useAuthSession)) as Session;
	if (!session || !session.user.id) return;

	const base64id = btoa(session.user.id);

	try {
		const db = await getDb(requestEvent.platform);
		const profile = await db
			.prepare("SELECT * FROM profiles WHERE user_id = ?")
			.bind(base64id)
			.first();

		if (!profile) {
			return { userId: base64id, profile: null };
		} else {
			return {
				userId: base64id,
				profile: parse(profile, [FIELDS.FIELDS_OF_STUDY])
			};
		}
	} catch (e) {
		console.error(e);
		return { userId: base64id, profile: null };
	}
};
