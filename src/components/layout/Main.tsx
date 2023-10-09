import { Slot, component$ } from "@builder.io/qwik";

export default component$(() => (
	<main class="mx-auto max-w-screen-2xl px-3 md:px-5">
		<Slot />
	</main>
));
