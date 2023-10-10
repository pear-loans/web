import type { ClassList } from "@builder.io/qwik";
import { component$, type QwikIntrinsicElements } from "@builder.io/qwik";
import type { IconDefinition } from "@fortawesome/fontawesome-common-types";
import Fa from "~/components/Fa";

interface Props {
	attributes?: QwikIntrinsicElements["a"];
	class?: ClassList;
	color?: 0 | 1 | 2 | 3 | null;
	icon?: IconDefinition;
	iconClass?: string;
	iconPosition?: "left" | "right";
	label?: string;
	removeDefaultClasses?: boolean;
}

/**
 * ### Creates a Link with optional icon
 *
 * @param {Props} props
 * @param {Props['attributes']} [props.attributes=undefined] Attributes to pass to the Link element.
 * @param {Props['class']} [props.class=undefined] CSS class name, if any
 * @param {Props['color']} [props.color=1] Color to use, if any. If 0 is provided, it is assumed you will provide a background color
 * @param {Props['icon']} [props.icon=undefined] Icon to be used on Link
 * @param {Props['iconClass']} [props.iconClass=undefined] CSS class name for icon, if any
 * @param {Props['iconPosition']} [props.iconPosition="left"] Icon position, if any. Defaults to "left". If "right" is provided, the icon will be placed after the text
 * @param {Props['label']} [props.label="ReplaceMe"] Link Text
 * @param {Props['removeDefaultClasses']} [props.removeDefaultClasses=false] Whether to use default classes or not
 *
 * @returns {Component<Props>}
 */
export default component$<Props>(
	({
		attributes,
		class: className = undefined,
		color = 1,
		icon = undefined,
		iconClass = undefined,
		iconPosition = "left",
		label = "ReplaceMe",
		removeDefaultClasses = false
	}) => {
		const iconClasses = iconClass || "w-5 h-5";

		return (
			// rome-ignore lint/a11y/useButtonType: Included in attributes
			<a
				{...attributes}
				class={[
					!removeDefaultClasses &&
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
					<Fa icon={icon} class={iconClasses} opacity={[1, 0.5]} />
				)}
				{label !== "" && <span>{label}</span>}
				{icon !== undefined && iconPosition === "right" && (
					<Fa icon={icon} class={[iconClasses, "ml-2"].join(" ")} opacity={[1, 0.5]} />
				)}
			</a>
		);
	}
);
