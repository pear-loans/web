import { component$, Slot } from "@builder.io/qwik";

export default component$(() => (
	<footer class="mx-auto max-w-screen-xl px-5 py-10">
		<Slot />
	</footer>
));
