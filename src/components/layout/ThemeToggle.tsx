import { component$, event$, useContext, useVisibleTask$ } from "@builder.io/qwik";
import type { JSX } from "@builder.io/qwik/jsx-runtime";
import { faMoonStars, faSunCloud, faTimer } from "@fortawesome/pro-duotone-svg-icons";
import Fa from "~/components/Fa";
import { GlobalStore, type ThemeOptions } from "~/context";

interface Props {
	_menuOpen: boolean;
}

type THEME_ICON_STORE = [JSX.Element, string];

// TODO: This is very stupid and surely there's a better way e.g. Object<[JSX.Element, string]> idk.
const THEME_ICON = {
	auto: [
		<Fa icon={faTimer} title="Use Device Theme" key="device" />,
		"Device Theme"
	] as THEME_ICON_STORE,
	light: [
		<Fa icon={faSunCloud} title="Light Theme" key="light" />,
		"Light Theme"
	] as THEME_ICON_STORE,
	dark: [<Fa icon={faMoonStars} title="Dark Theme" key="dark" />, "Dark Theme"] as THEME_ICON_STORE
};
const ORDER = Object.keys(THEME_ICON) as Array<ThemeOptions>;

export default component$<Props>(({ _menuOpen = false }) => {
	const store = useContext(GlobalStore);

	useVisibleTask$(() => {
		store.theme = (localStorage.getItem("theme") || "auto") as ThemeOptions;
	});

	const onClick$ = event$(() => {
		const currentIndex = ORDER.indexOf(store.theme);
		const nextIndex = (currentIndex + 1) % ORDER.length;
		store.theme = ORDER[nextIndex];

		if (store.theme === "auto") {
			localStorage.removeItem("theme");
		} else {
			localStorage.setItem("theme", store.theme);
		}

		document.documentElement.classList.toggle(
			"dark",
			store.theme === "dark" ||
				(store.theme === "auto" && window.matchMedia("(prefers-color-scheme: dark)").matches)
		);
	});

	return (
		<button
			onClick$={onClick$}
			type="button"
			class="flex rounded-full p-5 transition-opacity duration-100"
			role="menuitem"
			tabIndex={_menuOpen ? 0 : -1}
			title={THEME_ICON[store.theme][1]}
		>
			{THEME_ICON[store.theme][0]} <span class="sr-only">{THEME_ICON[store.theme][1]}</span>
		</button>
	);
});
