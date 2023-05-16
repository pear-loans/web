import { component$ } from "@builder.io/qwik";
import {
	QwikCityProvider,
	RouterOutlet,
	ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";

import "./global.css";

export default component$(() => {
	/**
	 * The root of a QwikCity site always start with the <QwikCityProvider> component,
	 * immediately followed by the document's <head> and <body>.
	 *
	 * Dont remove the `<head>` and `<body>` elements.
	 */

	return (
		<QwikCityProvider>
			<head>
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

				<script
					// rome-ignore lint/security/noDangerouslySetInnerHtml: Script in head might be fastest way to set theme.
          dangerouslySetInnerHTML='"dark"===localStorage.theme||!("theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches||document.documentElement.classList.remove("dark"),window.theme=localStorage.theme||"device"'
				/>
				<RouterHead />
			</head>
			<body class="">
				<RouterOutlet />
				<ServiceWorkerRegister />
			</body>
		</QwikCityProvider>
	);
});
