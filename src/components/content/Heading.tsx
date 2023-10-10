import { Slot, component$ } from "@builder.io/qwik";

interface Props {
	class?: string;
	level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

/**
 * Heading component for Text Headings
 *
 * @param {Props} props
 * @param {string} [props.class=undefined] CSS class name if any
 * @param {number} [props.level="h2"] HTML Heading level to use
 */
export default component$<Props>((props) => {
	const { class: extras, level: Heading = "h2" } = props;
	const classesForLevel =
		{
			h1: "text-5xl",
			h2: "text-3xl",
			h3: "text-2xl",
			h4: "text-xl",
			h5: "text-lg",
			h6: "text-base"
		}[Heading] || "";
	return (
		<Heading class={[classesForLevel, extras]}>
			<Slot />
		</Heading>
	);
});
