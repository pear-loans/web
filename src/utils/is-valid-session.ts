import type { Session } from "@auth/core/types";

export const isValidSession = (session: Session | null) =>
	session && new Date(session.expires || NaN) > new Date();

export const needsToCheckSession = (requestEvent) => {
	return !!requestEvent.cookie.get("next-auth.session-token")?.value;
};
