import {
	type PropFunction,
	type QwikMouseEvent,
	component$,
} from "@builder.io/qwik";
import type { IconDefinition } from "@fortawesome/fontawesome-common-types";
import Fa from "~/includes/fa";

interface Props {
	class?: string;
	color?: 0 | 1 | 2 | 3;
	icon?: IconDefinition;
	label?: string;
	onClick$?: PropFunction<() => void>;
	type?: "button" | "submit";
}

/**
 * Wrapper component puts content in a card with a background image of icons.
 *
 * @param {Props} props
 * @param {string} [props.class=""] CSS class name if any
 * @param {string} [props.color=1] Color to use, if any. If 0 is provided, it is assumed you will provide a background color
 * @param {IconDefinition} [props.icon] Icon to be used on button
 * @param {string} [props.label="ReplaceMe"] Button Text
 * @param {PropFunction} [props.onClick$] Click event handler, if any
 * @param {number} [props.type="button"] Button type ("button" or "submit")
 */
export default component$<Props>(
	({
		color = 1,
		icon = undefined,
		label = "ReplaceMe",
		class: className = undefined,
		type = "button",
		onClick$,
	}) => {
		return (
			<button
				type={type}
				class={[
					"px-5 py-3 rounded-full font-semibold",
					{
						"bg-green-200 dark:bg-green-800": color === 1,
					},
					className,
				]}
				onClick$={onClick$}
			>
				{icon && <Fa icon={icon} />}
				<span>{label}</span>
			</button>
		);
	},
);
