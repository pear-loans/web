import { type PropFunction, component$ } from "@builder.io/qwik";
import type { IconDefinition } from "@fortawesome/fontawesome-common-types";
import Fa from "~/includes/fa";

interface Props {
	type: "text";
	class?: string;
	icon?: IconDefinition;
	label?: string;
	name?: string;
	placeholder?: string;
	required?: boolean;
}

/**
 * Wrapper component puts content in a card with a background image of icons.
 *
 * @param {Props} props
 * @param {string} [props.class=""] CSS class name if any
 * @param {IconDefinition} [props.icon] Icon to be used on button
 * @param {string} [props.label="ReplaceMe"] Button Text
 * @param {number} [props.type="text"] Input type ("text")
 */
export default component$<Props>(
	({
		type,
		icon = undefined,
		label = "",
		class: className = undefined,
		name = "replace-me",
		placeholder = undefined,
		required = false,
	}) => {
		return (
			<div class="relative">
				<label class="flex flex-col justify-center">
					{icon && (
						<Fa
							icon={icon}
							class="mb-2 ml-4 text-3xl absolute left-0 bottom-0 fa-primary-black dark:fa-primary-white opacity-25"
						/>
					)}
					{label && (
						<span class="block text-sm pb-1 text-gray-700 dark:text-gray-300">
							{label}
						</span>
					)}
					<input
						type={type}
						class={[
							"px-5 pl-16 py-3 rounded-full font-semibold bg-gray-200 dark:bg-gray-800",
							className,
						]}
						name={name}
						placeholder={placeholder}
						required={required}
					/>
				</label>
			</div>
		);
	},
);
