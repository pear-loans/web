import { component$ } from "@builder.io/qwik";

/**
 * A skeleton component that can be used to show a loading state.
 * In most caases, you probably want the `relative` class to be applied to the parent element.
 */
export const Skeleton = component$(() => (
	<div class="absolute top-0 left-0 w-full h-full bg-gray-200 rounded-full dark:bg-gray-700 animate-pulse" />
));
