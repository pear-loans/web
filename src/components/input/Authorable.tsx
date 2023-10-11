import { $, component$, useSignal } from "@builder.io/qwik";
import { faPenToSquare } from "@fortawesome/pro-duotone-svg-icons";
import Button from "./Button";

interface Props {
	class?: string;
	label?: string;
}

/**
 * ### Creates an input with optional icon and label
 *
 * @param {Props} props
 * @param {Props['class']} [class=undefined] Additional class names to apply to the input element.
 * @param {Props['label']} [label=undefined] Label to display next to the input.
 */
export default component$<Props>(({ class: className = undefined, label = undefined }) => {
	const button = useSignal<HTMLButtonElement>();

	const borderClasses = "border border-black/10 dark:border-white/10 rounded-lg";

	return (
		<div
			class="relative cursor-pointer"
			onClick$={() => {
				if (button.value) button.value.click();
			}}
		>
			<div
				class={[
					"h-50 w-full flex animate-pulse items-center justify-center bg-black/10 dark:bg-gray-700/10",
					borderClasses
				]}
			>
				<span class="text-black/50 dark:text-white/50">{label || "No content authored"}</span>
			</div>
			<Button
				attributes={{
					ref: button,
					onClick$: $((e) => {
						e.stopPropagation();
						console.log("clicked");
					}),
					title: "Edit content"
				}}
				class={[
					"absolute right-0 top-0 h-full border-l-0 rounded-l-0 bg-green-100/50 px-4 text-black dark:text-white dark:bg-black/50",
					borderClasses
				]}
				icon={faPenToSquare}
				color={null}
				label=""
				removeDefaultClasses
			/>
		</div>
	);
});
