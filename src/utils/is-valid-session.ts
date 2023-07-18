import type { Session } from "@auth/core/types";

export const isValidSession = (session: Session | null) => {
	console.log(session);
	return session && new Date(session?.expires || NaN) > new Date();
};
