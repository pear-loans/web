import type { JSXChildren, QwikMouseEvent } from "@builder.io/qwik";
import { $, component$, useSignal } from "@builder.io/qwik";
import { faPenToSquare } from "@fortawesome/pro-regular-svg-icons";
import Button from "./Button";
import Input from "./Input";

interface Props {
	class?: string;
	editor?: "Input" | "Tags";
	isEmpty?: boolean;
	isPreview?: boolean;
	label?: JSXChildren;
}

/**
 * ### Creates an input with optional icon and label
 *
 * @param {Props} props
 * @param {Props['class']} [class=undefined] Additional class names to apply to the input element.
 * @param {Props['editor']} [editor="Input"] Editor to use. Defaults to "Input". If "Tags" is provided, the input will be a tags editor.
 * @param {Props['isEmpty']} [isEmpty=false] Whether the input is empty (has authored content) or not.
 * @param {Props['isPreview']} [isPreview=false] Whether the input is in preview mode or not.
 * @param {Props['label']} [label=null] Label to display next to the input.
 */
export default component$<Props>(
	({
		class: extraClasses = undefined,
		input = "Input",
		label = null,
		isEmpty = false,
		isPreview = false
	}) => {
		const $button = useSignal<HTMLButtonElement>();
		const $input = useSignal<HTMLInputElement>();
		const $trackWidth = useSignal<HTMLSpanElement>();
		const currentInput = useSignal(`${label}`);
		const editMode = useSignal(false);

		const borderClasses = "border border-black/10 dark:border-white/10 rounded-lg";

		const onClick = $(
			(
				e: QwikMouseEvent<HTMLInputElement | HTMLButtonElement | HTMLDivElement>,
				currentTarget: Element
			) => {
				e.stopPropagation();
				if (currentTarget === $input.value) return;
				editMode.value = !editMode.value;
				if (editMode.value) $input.value?.focus();
			}
		);

		return isPreview ? (
			label
		) : (
			<div class="flex cursor-pointer">
				<div
					class={[
						"w-full flex items-center justify-center border-r-0 rounded-r-0",
						isEmpty
							? "animate-pulse bg-black/10 dark:bg-gray-700/10 text-black/50 dark:text-white/50"
							: "pr-3 p-2",
						borderClasses,
						extraClasses
					]}
					onClick$={onClick}
				>
					<div
						aria-hidden="true"
						class="absolute h-0 overflow-hidden tracking-inherit"
						ref={$trackWidth}
					>
						{currentInput.value}
					</div>
					<Input
						attributes={{
							onInput$: $((e, currentTarget) => {
								console.log(currentTarget, e.target.value);
								currentInput.value = currentTarget.value || "";
								setTimeout(() => {
									currentTarget.style.width = `${$trackWidth.value?.offsetWidth + 1}px`;
								}, 1);
							}),
							ref: $input,
							style: {
								width: editMode.value ? `${$trackWidth.value?.offsetWidth + 1}px` : undefined
							},
							tabIndex: editMode.value ? 0 : -1,
							value: `${label}`
						}}
						class={[
							"bg-transparent tracking-inherit overflow-hidden",
							editMode.value ? "w-full" : "w-0"
						]}
						removeDefaultClasses
					/>
					<div class={{ hidden: editMode.value }}>{label || "No content authored"}</div>
				</div>
				<Button
					attributes={{ onClick$: onClick, ref: $button }}
					class={[
						"border-l-0 rounded-l-0 bg-green-100/50 px-4 text-black dark:text-white dark:bg-black/50 flex items-center",
						borderClasses
					]}
					icon={faPenToSquare}
					color={null}
					label=""
					removeDefaultClasses
				/>
			</div>
		);
	}
);
