import { useDocumentHead, useLocation } from "@builder.io/qwik-city";

import { component$ } from "@builder.io/qwik";

/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */
export default component$(() => {
	const head = useDocumentHead();
	const loc = useLocation();

	return (
		<>
			<script dangerouslySetInnerHTML='"dark"===localStorage.theme||!("theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches||document.documentElement.classList.remove("dark")' />

			<title>{head.title}</title>

			<link rel="canonical" href={loc.url.href} />
			<link rel="manifest" href="/manifest.json" />
			<link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
			<meta charSet="utf-8" />
			<meta
				name="description"
				content="Student loan peer-to-peer crowdfunding. List your student loan or help others by donating."
			/>
			<meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000000" />
			<meta name="theme-color" media="(prefers-color-scheme: light)" content="#ecfdf5" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />

			{head.meta.map((m) => (
				<meta key={m.key} {...m} />
			))}

			{head.links.map((l) => (
				<link key={l.key} {...l} />
			))}

			{head.styles.map((s) => (
				<style key={s.key} {...s.props} dangerouslySetInnerHTML={s.style} />
			))}

			{head.scripts.map((s) => (
				<script key={s.key} {...s.props} dangerouslySetInnerHTML={s.script} />
			))}
		</>
	);
});
