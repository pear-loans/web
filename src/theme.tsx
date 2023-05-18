import { createContextId } from "@builder.io/qwik";

export type ThemeOptions = "light" | "dark" | "device";
export interface Theme {
	loading: boolean; // Loading used to help prevent flash of theme button, mainly.
	mode: ThemeOptions;
}
export const ThemeContext = createContextId<Theme>("site.theme");
