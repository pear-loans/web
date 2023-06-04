import { component$, Slot, useSignal, useVisibleTask$ } from "@builder.io/qwik";

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
 * @param {string} [props.class=""] CSS class name
 * @param {number} [props.delay=0] Milliseconds to wait before animating
 * @param {string} [props.rootMargin="0px 0px 0px 0px"] CSS margin-like string, passed to IntersectionObserver
 * @param {number} [props.threshold=1] Number between 0 and 1, passed to IntersectionObserver
 */
export default component$((props: Props) => {
	const {
		delay = 0,
		class: className,
		rootMargin = "0px 0px 0px 0px",
		threshold = 1,
	} = props;

	const container = useSignal<Element>();

	useVisibleTask$(() => {
		if (container.value) {
			const observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							entry.target.classList.remove("invisible");
							entry.target.classList.add("animate-fade-in-up");
							observer.unobserve(entry.target);
						}
					});
				},
				{ rootMargin, threshold },
			);
			observer.observe(container.value);
		}
	});

	return (
		<div
			class={["invisible", className]}
			style={{ animationDelay: `${delay}ms` }}
			ref={container}
		>
			<Slot />
		</div>
	);
});
