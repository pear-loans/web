import { useAuthSession } from "~/routes/plugin@auth";
import { getDb } from "~/tmp/db";

import type { RequestEventAction, RequestEventLoader } from "@builder.io/qwik-city";
import type { Session } from "~/config/db";
import { FIELDS } from "~/config/db";
import { parse } from "~/utils/json";
import { EMPTY, INVALID_STRING } from "~/utils/validate";

export const ERRORS = {
	INVALID_INPUT: "INVALID_INPUT",
	MISSING_INPUT: "MISSING_INPUT",
	UNEXPECTED: "UNEXPECTED"
};

export const routeActionAddProfile = async (data: any, requestEvent: RequestEventAction) => {
	if (EMPTY(data[FIELDS.FULL_NAME], data[FIELDS.SCHOOLS], data[FIELDS.FIELDS_OF_STUDY]))
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
			`INSERT INTO profiles (${FIELDS.ID}, ${FIELDS.FULL_NAME}, ${FIELDS.SCHOOLS}, ${FIELDS.FIELDS_OF_STUDY}) VALUES (?1,?2,?3,?4) ON CONFLICT (${FIELDS.ID}) DO UPDATE SET ${FIELDS.FULL_NAME} = EXCLUDED.${FIELDS.FULL_NAME}, ${FIELDS.SCHOOLS} = EXCLUDED.${FIELDS.SCHOOLS}`
		)
			.bind(
				data[FIELDS.ID],
				data[FIELDS.FULL_NAME],
				JSON.stringify(data[FIELDS.SCHOOLS]) || "",
				JSON.stringify(data[FIELDS.FIELDS_OF_STUDY]) || ""
			)
			.run();

		return {
			full_name: data[FIELDS.FULL_NAME],
			schools: data[FIELDS.SCHOOLS],
			fields_of_study: data[FIELDS.FIELDS_OF_STUDY],
			errors: []
		};
	} catch (e) {
		console.error(e);
		return { errors: [ERRORS.UNEXPECTED] };
	}
};

export const routeLoaderProfile = async (requestEvent: RequestEventLoader) => {
	const session = (await requestEvent.resolveValue(useAuthSession)) as Session;
	if (!session || !session.user?.id) return;

	const base64id = btoa(session.user.id);

	try {
		const db = await getDb(requestEvent.platform);
		const profile = await db
			.prepare("SELECT * FROM profiles WHERE user_id = ?")
			.bind(base64id)
			.first();

		if (!profile) {
			return { userId: base64id };
		} else {
			return {
				userId: base64id,
				...parse(profile, [FIELDS.FIELDS_OF_STUDY, FIELDS.SCHOOLS])
			};
		}
	} catch (e) {
		console.error(e);
		return { userId: base64id };
	}
};
