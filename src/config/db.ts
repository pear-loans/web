import type { User } from "@auth/core/types";

export const FIELDS = {
	ID: "userId",
	FULL_NAME: "full_name",
	SCHOOLS: "schools",
	FIELDS_OF_STUDY: "fields_of_study"
};

export type ProfileData = {
	userId: string;
	fields_of_study: string[];
	full_name: string;
	schools: string[];
};

export type Session = {
	user?: User;
	id?: string;
	expires: string;
} | null;
