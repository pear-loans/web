// Theme toggle component

import { component$, useContext, event$ } from "@builder.io/qwik";
import { ThemeContext, type Theme } from "../../theme";

const THEME_ICON = {
	light: ["🌞", "Light Theme"],
	dark: ["🌚", "Dark Theme"],
	device: ["📱", "Device Theme"],
};
const ORDER = Object.keys(THEME_ICON) as Array<Theme>;

export const ThemeToggle = component$(() => {
	const currentTheme = useContext(ThemeContext);
	const onClick$ = event$(() => {
		const currentIndex = ORDER.indexOf(currentTheme.value);
		const nextIndex = (currentIndex + 1) % ORDER.length;
		currentTheme.value = ORDER[nextIndex];

		if (currentTheme.value === "device") {
			localStorage.removeItem("theme");
		} else {
			localStorage.setItem("theme", currentTheme.value);
		}

		document.documentElement.classList.toggle(
			"dark",
			currentTheme.value === "dark" ||
				(currentTheme.value === "device" &&
					window.matchMedia("(prefers-color-scheme: dark)").matches),
		);
	});

	return (
		<button onClick$={onClick$} type="button">
			{THEME_ICON[currentTheme.value][0]} {THEME_ICON[currentTheme.value][1]}
		</button>
	);
});
