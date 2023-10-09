import {
	$,
	component$,
	useSignal,
	useStore,
	type QwikFocusEvent,
	type QwikKeyboardEvent
} from "@builder.io/qwik";
import { faPlus, faXmark, type IconDefinition } from "@fortawesome/pro-regular-svg-icons";

import { INVALID_STRING, MAX_LENGTH, REGEX } from "~/utils/validate";

import Button from "./Button";
import Input from "./Input";

type Props = {
	icon?: IconDefinition;
	label?: string;
	maxItems?: number;
	name?: string;
	placeholder?: string;
};

/**
 * ### "Tags" input component. Lets user add a list of strings for submission.
 *
 * @param {Props} props
 * @param {Props['icon']} [icon=undefined] Icon to show in the input, if any.
 * @param {Props['label']} [label="ReplaceMe"] Label to show on the tag input, if any.
 * @param {Props['maxItems']} [maxItems=10] Maximum number of items to allow in the list.
 * @param {Props['name']} [name="replace-me[]"] Name of the input field to use for submission.
 * @param {Props['placeholder']} [placeholder=undefined] Placeholder text to show in the user input field, if any.
 *
 * @returns {Component<Props>}
 */
export default component$<Props>(
	({
		icon = undefined,
		label = "ReplaceMe",
		maxItems = 10,
		name = "replace-me[]",
		placeholder = undefined
	}) => {
		const $userInput = useSignal<HTMLInputElement>();
		const $userAddButton = useSignal<HTMLButtonElement>();
		const $userAddedItemsContainer = useSignal<HTMLDivElement>();

		const items = useStore<string[]>([]);

		const addItem = $(() => {
			if (items.length > maxItems) return;

			const input = $userInput.value as HTMLInputElement;
			if (!input) return;

			const value = input.value.trim();
			if (INVALID_STRING(value) || items.includes(value)) return;

			items.push(value);
			input.value = "";
		});

		const removeItem = $((item: string) => {
			items.splice(items.indexOf(item), 1);
		});

		const handleKeyDown = $((e: QwikKeyboardEvent<HTMLInputElement>) => {
			if (!e.isTrusted || e.key !== "Enter") return;

			// @ts-ignore: This definitely exists on KeyboardEvent
			e.preventDefault();
			addItem();
		});

		const handleBlur = $((e: QwikFocusEvent<HTMLInputElement>) => {
			if (
				e.relatedTarget === $userAddButton.value ||
				$userAddedItemsContainer.value?.contains(e.relatedTarget as Node)
			)
				return;
			if ($userInput.value) {
				$userInput.value.value = "";
			}
		});

		const focusTagInput = $(() => {
			($userInput.value as HTMLInputElement).focus();
		});

		return (
			<fieldset class="relative flex flex-row flex-wrap gap-3">
				{label && (
					<legend
						class="block cursor-default pb-1 text-sm text-gray-700 dark:text-gray-300"
						onClick$={$(() => focusTagInput())}
					>
						{label}
					</legend>
				)}
				{items.map((item) => (
					<div key={item} ref={$userAddedItemsContainer}>
						<input type="hidden" name={`${name}[]`} value={item} />
						<Button
							attributes={{
								"aria-label": `Remove "${item}"`,
								onClick$: $(() => {
									removeItem(item);
									focusTagInput();
								})
							}}
							color={0}
							label={item}
							icon={faXmark}
							iconPosition="right"
						/>
					</div>
				))}
				{items.length < maxItems && (
					<>
						<Input
							attributes={{
								name: "",
								ref: $userInput,
								placeholder: placeholder,
								onKeyDown$: handleKeyDown,
								onBlur$: handleBlur,
								minLength: 2,
								maxLength: MAX_LENGTH.STRING,
								required: items.length === 0,
								pattern: REGEX.GENERIC_STRING.toString()
							}}
							class={icon ? "w-52" : "w-44"}
							icon={icon}
						/>

						<Button
							label="Add"
							icon={faPlus}
							iconPosition="right"
							attributes={{
								ref: $userAddButton,
								onClick$: $(() => {
									addItem();
									focusTagInput();
								})
							}}
						/>
					</>
				)}
			</fieldset>
			// TODO: Integrate <datalist> for completion suggestions for fields of study.
			// e.g.: (See MDN)
			// <input list="ice-cream-flavors" id="ice-cream-choice" name="ice-cream-choice" />
			// <datalist id="ice-cream-flavors">
			// 	<option value="Chocolate"></option>
			// 	<option value="Coconut"></option>
			// 	<option value="Mint"></option>
			// 	<option value="Strawberry"></option>
			// 	<option value="Vanilla"></option>
			// </datalist>
		);
	}
);
