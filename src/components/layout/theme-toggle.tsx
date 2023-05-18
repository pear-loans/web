// Theme toggle component

import { component$, useContext, event$ } from "@builder.io/qwik";
import { ThemeContext, type ThemeOptions } from "../../theme";

const THEME_ICON = {
	light: ["🌞", "Light Theme"],
	dark: ["🌚", "Dark Theme"],
	device: ["📱", "Device Theme"],
};
const ORDER = Object.keys(THEME_ICON) as Array<ThemeOptions>;

export const ThemeToggle = component$(() => {
	const currentTheme = useContext(ThemeContext);
	const onClick$ = event$(() => {
		const currentIndex = ORDER.indexOf(currentTheme.mode);
		const nextIndex = (currentIndex + 1) % ORDER.length;
		currentTheme.mode = ORDER[nextIndex];

		if (currentTheme.mode === "device") {
			localStorage.removeItem("theme");
		} else {
			localStorage.setItem("theme", currentTheme.mode);
		}

		document.documentElement.classList.toggle(
			"dark",
			currentTheme.mode === "dark" ||
				(currentTheme.mode === "device" &&
					window.matchMedia("(prefers-color-scheme: dark)").matches),
		);
	});

	return (
		<button
			onClick$={onClick$}
			type="button"
			class={[
				"transition-opacity duration-75",
				currentTheme.loading ? "opacity-0" : "opacity-100",
			]}
		>
			{THEME_ICON[currentTheme.mode][0]} {THEME_ICON[currentTheme.mode][1]}
		</button>
	);
});
