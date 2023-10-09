export const parse = (input: any, keys: string[]) =>
	keys.reduce((acc, key) => {
		acc[key] = JSON.parse(input[key]);
		return acc;
	}, input);

export const stringify = (input: any, keys: string[]) =>
	keys.reduce((acc, key) => {
		acc[key] = JSON.stringify(input[key]);
		return acc;
	}, input);
