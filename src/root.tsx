import {
	component$,
	useContextProvider,
	useStore,
	useSignal,
	useVisibleTask$,
	createContextId,
	type Signal,
} from "@builder.io/qwik";
import {
	QwikCityProvider,
	RouterOutlet,
	ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/layout/head";
import { ThemeContext, type ThemeOptions, type Theme } from "./theme";

import styles from "./global.css?inline";

export const InitialLoadContext =
	createContextId<Signal<boolean>>("site.initial_load");

export default component$(() => {
	// Handles Initializing the current theme
	const initialLoad = useSignal(true);
	const theme = useStore<Theme>(
		{ mode: "device", loading: true },
		{ deep: false },
	);
	useContextProvider(ThemeContext, theme);
	useContextProvider(InitialLoadContext, initialLoad);
	useVisibleTask$(() => {
		theme.loading = false;
		theme.mode = (localStorage.getItem("theme") as ThemeOptions) || "device";
		setTimeout(() => {
			initialLoad.value = false;
		}, 100);
	});

	return (
		<QwikCityProvider>
			<head>
				{/* rome-ignore lint/security/noDangerouslySetInnerHtml: Disabled to inline essential tailwind styles to HTML */}
				<style dangerouslySetInnerHTML={styles} />
				{/* rome-ignore lint/security/noDangerouslySetInnerHtml: Getting theme from storage */}
				<script dangerouslySetInnerHTML='"dark"===localStorage.theme||!("theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches||document.documentElement.classList.remove("dark")' />
				<title>Pear Loans</title>
				<meta
					name="description"
					content="Student loan peer-to-peer crowdfunding. List your student loan or help others by donating."
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta property="og:title" content="Pear Loans" />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://pear.loans" />
				<meta
					property="og:image"
					content="https://pear.loans/apple-touch-icon.png"
				/>
				<meta property="og:image:alt" content="Image of a pear" />
				<meta
					name="theme-color"
					media="(prefers-color-scheme: light)"
					content="#ecfdf5"
				/>
				<meta
					name="theme-color"
					media="(prefers-color-scheme: dark)"
					content="#000000"
				/>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link rel="manifest" href="/site.webmanifest" />
				<link rel="shortcut icon" type="image/ico" href="/favicon.ico" />
				<RouterHead />
			</head>
			<body class="text-base dark:bg-black dark:text-white fa-primary-green-500 fa-secondary-green-900 dark:fa-primary-green-400 dark:fa-secondary-green-50 min-w-[320px]">
				<RouterOutlet />
				<ServiceWorkerRegister />
			</body>
		</QwikCityProvider>
	);
});
