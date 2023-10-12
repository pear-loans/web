import type { ClassList } from "@builder.io/qwik";
import { component$, type QwikIntrinsicElements } from "@builder.io/qwik";
import type { IconDefinition } from "@fortawesome/fontawesome-common-types";
import Fa from "~/components/Fa";

interface Props {
	attributes?: QwikIntrinsicElements["input"];
	class?: ClassList;
	icon?: IconDefinition;
	isSmall?: boolean;
	label?: string;
	removeDefaultClasses?: boolean;
}

/**
 * ### Creates an input with optional icon and label
 *
 * @param {Props} props
 * @param {Props['attributes']} [attributes=undefined] Attributes to pass to the input element.
 * @param {Props['class']} [class=undefined] Additional class names to apply to the input element.
 * @param {Props['icon']} [icon=undefined] Icon to show in the input, if any.
 * @param {Props['isSmall']} [isSmall=false] Whether to use the small input variant or not.
 * @param {Props['label']} [label=undefined] Label to show on the input, if any.
 * @param {Props['removeDefaultClasses']} [removeDefaultClasses=false] Whether to use default classes or not
 */
export default component$<Props>(
	({
		attributes,
		class: className = undefined,
		icon = undefined,
		isSmall = false,
		label = undefined,
		removeDefaultClasses = false
	}) => {
		const classes = [];
		if (!removeDefaultClasses) {
			classes.push(
				"rounded-full font-semibold bg-gray-200 dark:bg-gray-800 text-black dark:text-white placeholder:opacity-50"
			);
			if (isSmall) classes.push("px-3 py-1");
			else classes.push("p-3 w-full");
		}
		return (
			<div class="relative text-gray-700 dark:text-gray-300">
				<label class="flex flex-col">
					{label && <span class="block pb-1 text-sm">{label}</span>}
					{icon && (
						<Fa icon={icon} class="absolute bottom-[14px] left-0 ml-4 h-5 w-5 text-lg opacity-75" />
					)}
					<input {...attributes} class={[classes, className, icon && "pl-12"]} />
				</label>
			</div>
		);
	}
);
