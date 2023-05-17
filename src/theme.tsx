import { type Signal, createContextId } from "@builder.io/qwik";

export type Theme = "light" | "dark" | "device";

export const ThemeContext = createContextId<Signal<Theme>>("site.theme");
