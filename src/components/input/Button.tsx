import { component$, type QwikIntrinsicElements } from "@builder.io/qwik";
import type { IconDefinition } from "@fortawesome/fontawesome-common-types";
import Fa from "~/components/Fa";

interface Props {
	attributes?: QwikIntrinsicElements["button"];
	class?: string;
	color?: 0 | 1 | 2 | 3 | null;
	icon?: IconDefinition;
	iconPosition?: "left" | "right";
	label?: string;
}

/**
 * ### Creates a Button with optional icon
 *
 * @param {Props} props
 * @param {Props['attributes']} [props.attributes=undefined] Attributes to pass to the button element.
 * @param {Props['class']} [props.class=undefined] CSS class name, if any
 * @param {Props['color']} [props.color=1] Color to use, if any. If 0 is provided, it is assumed you will provide a background color
 * @param {Props['icon']} [props.icon=undefined] Icon to be used on button
 * @param {Props['iconPosition']} [props.iconPosition="left"] Icon position, if any. Defaults to "left". If "right" is provided, the icon will be placed after the text
 * @param {Props['label']} [props.label="ReplaceMe"] Button Text
 *
 * @returns {Component<Props>}
 */
export default component$<Props>(
	({
		attributes,
		class: className = undefined,
		color = 1,
		icon = undefined,
		iconPosition = "left",
		label = "ReplaceMe"
	}) => {
		if (attributes && attributes.type === undefined) attributes.type = "button";
		return (
			// rome-ignore lint/a11y/useButtonType: Included in attributes
			<button
				{...attributes}
				class={[
					"flex items-center justify-center gap-x-2 px-5 py-3 rounded-full font-semibold",
					{
						"bg-gray-200 dark:bg-gray-800": color === 0,
						"bg-green-200 dark:bg-green-800": color === 1,
						"bg-blue-200 dark:bg-blue-800": color === 2
					},
					className
				]}
				// `tabIndex` needed for Safari to work with `relatedTarget`
				tabIndex={0}
			>
				{icon !== undefined && iconPosition === "left" && (
					<Fa icon={icon} class="h-5 w-5" opacity={[1, 0.5]} />
				)}
				<span>{label}</span>
				{icon !== undefined && iconPosition === "right" && (
					<Fa icon={icon} opacity={[1, 0.5]} class="ml-2 h-5 w-5" />
				)}
			</button>
		);
	}
);
