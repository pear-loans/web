export const REGEX = {
	// EMAIL: /^[\w-.]+@([\w-]+\.)+[\w-]{2,12}$/,
	GENERIC_STRING: /^[a-zA-Z0-9\-\s\,\.\(\)\/\'\"]+$/
};
export const MAX_LENGTH = {
	STRING: 100
};

type Options = {
	maxLength: number;
	validChars: RegExp;
};

export const INVALID_STRING = (
	value = "",
	options: Options = {
		maxLength: MAX_LENGTH.STRING,
		validChars: REGEX.GENERIC_STRING
	}
) => value === "" || value.length > options.maxLength || !options.validChars.test(value);
