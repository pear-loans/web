import type { Session } from "@auth/core/types";

export const isValidSession = (session: Session | null) =>
	session && new Date(session?.expires || NaN) > new Date();
