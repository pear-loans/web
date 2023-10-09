import { Slot, component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";

interface Props {
	class?: string;
	delay?: number;
	rootMargin?: string;
	threshold?: number;
}

/**
 * Container wrapper that fades in when it becomes visible.
 *
 * @param {Props} props
 * @param {string} [props.class=undefined] CSS class name
 * @param {number} [props.delay=undefined] Milliseconds to wait before animating
 * @param {string} [props.rootMargin="0px 0px 0px 0px"] CSS margin-like string, passed to IntersectionObserver
 * @param {number} [props.threshold=1] Number between 0 and 1, passed to IntersectionObserver
 */
export default component$((props: Props) => {
	const {
		class: className,
		delay = undefined,
		rootMargin = "0px 0px 0px 0px",
		threshold = 0.33
	} = props;

	const fadeContainer = useSignal<Element>();

	useVisibleTask$(() => {
		if (fadeContainer.value) {
			const observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							observer.disconnect();
							entry.target.classList.remove("invisible");
							entry.target.classList.add("fade-up");
							observer.unobserve(entry.target);
						}
					});
				},
				{ rootMargin, threshold }
			);
			observer.observe(fadeContainer.value);
		}
	});

	return (
		<div
			class={["invisible", className]}
			style={delay !== undefined ? `animation-delay:${delay}ms` : undefined}
			ref={fadeContainer}
		>
			<Slot />
		</div>
	);
});
