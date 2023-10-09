import { component$, event$, useContext, useVisibleTask$ } from "@builder.io/qwik";
import { faMoonStars, faSunCloud, faTimer } from "@fortawesome/pro-duotone-svg-icons";
import Fa from "~/components/Fa";
import { GlobalStore, type ThemeOptions } from "~/context";

interface Props {
	_menuOpen: boolean;
}

const THEME_ICON = {
	auto: [<Fa icon={faTimer} title="Use Device Theme" key="device" />, "Device Theme"],
	light: [<Fa icon={faSunCloud} title="Light Theme" key="light" />, "Light Theme"],
	dark: [<Fa icon={faMoonStars} title="Dark Theme" key="dark" />, "Dark Theme"]
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
		>
			{THEME_ICON[store.theme][0]} <span class="sr-only">{THEME_ICON[store.theme][1]}</span>
		</button>
	);
});
