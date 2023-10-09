import { createContextId } from "@builder.io/qwik";

export type ThemeOptions = "light" | "dark" | "auto";
export interface SiteStore {
	theme: ThemeOptions;
}
export const GlobalStore = createContextId<SiteStore>("store");
