import { component$, useContextProvider, useStore, useStyles$ } from "@builder.io/qwik";
import { QwikCityProvider, RouterOutlet, ServiceWorkerRegister } from "@builder.io/qwik-city";
import Head from "~/components/layout/Head";

import { GlobalStore, type SiteStore } from "./context";

import reset from "@unocss/reset/tailwind.css?inline";
import unocss from "./global.scss?inline";

export default component$(() => {
	const store = useStore<SiteStore>({
		theme: "auto"
	});

	useContextProvider(GlobalStore, store);
	useStyles$(reset);
	useStyles$(unocss);

	return (
		<QwikCityProvider>
			<head>
				<title>Pear Loans</title>
				<Head />
				<ServiceWorkerRegister />
			</head>
			<body
				lang="en"
				class="[scrollbar-gutter:stable] min-w-[320px] text-base dark:bg-black dark:text-white"
			>
				<RouterOutlet />
			</body>
		</QwikCityProvider>
	);
});
