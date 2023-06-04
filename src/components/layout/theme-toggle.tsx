import Fa from "🍐/includes/fa";
import {
	faMoonStars,
	faSunCloud,
	faTimer,
} from "@fortawesome/pro-duotone-svg-icons";
import { component$, useContext, event$ } from "@builder.io/qwik";
import { ThemeContext, type ThemeOptions } from "../../theme";

const THEME_ICON = {
	light: [<Fa icon={faSunCloud} title="Light Theme" />, "Light Theme"],
	dark: [<Fa icon={faMoonStars} title="Dark Theme" />, "Dark Theme"],
	device: [<Fa icon={faTimer} title="Use Device Theme" />, "Device Theme"],
};
const ORDER = Object.keys(THEME_ICON) as Array<ThemeOptions>;

export default component$(() => {
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
				"transition-opacity duration-100 p-5 rounded-full",
				currentTheme.loading ? "opacity-0" : "opacity-100",
			]}
			role="menuitem"
		>
			{THEME_ICON[currentTheme.mode][0]}{" "}
			<span class="sr-only">{THEME_ICON[currentTheme.mode][1]}</span>
		</button>
	);
});
