import type { QwikMouseEvent } from "@builder.io/qwik";
import { $, component$, useComputed$, useSignal } from "@builder.io/qwik";
import type { JSX } from "@builder.io/qwik/jsx-runtime";
import { faFloppyDisk } from "@fortawesome/pro-duotone-svg-icons";
import { faPenToSquare } from "@fortawesome/pro-regular-svg-icons";
import Button from "./Button";

interface Props {
	editor: JSX.Element;
	class?: string;
	isEmpty?: boolean;
	isPreview?: boolean;
	label?: JSX.Element | JSX.Element[] | string;
}

/**
 * ### Creates an input with optional icon and label
 *
 * @param {Props} props
 * @param {Props['editor']} editor Editor to use. Defaults to "Input". If "Tags" is provided, the input will be a tags editor.
 * @param {Props['class']} [class=undefined] Additional class names to apply to the input element.
 * @param {Props['isEmpty']} [isEmpty=false] Whether the input is empty (has authored content) or not.
 * @param {Props['isPreview']} [isPreview=false] Whether the input is in preview mode or not.
 * @param {Props['label']} [label=null] Label to display next to the input.
 */
export default component$<Props>(
	({
		editor,
		class: extraClasses = undefined,
		isEmpty = false,
		isPreview = false,
		label = null
	}) => {
		const $button = useSignal<HTMLButtonElement>();
		const $editorContainer = useSignal<HTMLDivElement>();
		const editMode = useSignal(false);
		const currentIcon = useComputed$(() => {
			return editMode.value ? faFloppyDisk : faPenToSquare;
		});

		const editorMode = useComputed$(() => {
			return editMode.value && isPreview;
		});

		const borderClasses = "border border-black/10 dark:border-white/10 rounded-lg";

		const onClick = $(
			(
				e: QwikMouseEvent<HTMLInputElement | HTMLButtonElement | HTMLDivElement>,
				currentTarget: Element
			) => {
				e.stopPropagation();
				if (currentTarget === $editorContainer.value && !editMode.value) {
					editMode.value = true;
				} else if (currentTarget === $button.value) {
					editMode.value = !editMode.value;
				}
				const targetInput = $editorContainer.value?.querySelector("input:not([type='hidden'])");
				// TODO: Fix this hack?
				setTimeout(() => targetInput?.focus(), 10);
			}
		);

		return isPreview ? (
			<>{label}</>
		) : (
			<div class="flex cursor-pointer">
				<div
					class={[
						"w-full flex items-center justify-center border-r-0 rounded-r-0",
						isEmpty && !editMode.value
							? "animate-pulse bg-black/10 dark:bg-gray-700/10 text-black/50 dark:text-white/50"
							: "pr-3 p-2",
						borderClasses,
						extraClasses
					]}
					onClick$={onClick}
					ref={$editorContainer}
				>
					<div class={{ hidden: !editorMode.value }}>{editor}</div>
					<div class={{ hidden: editorMode.value }}>{label || "No content authored"}</div>
				</div>
				<Button
					attributes={{ onClick$: onClick, ref: $button }}
					class={[
						"border-l-0 rounded-l-0 bg-green-100/50 px-4 text-black dark:text-white dark:bg-black/50 flex items-center",
						borderClasses
					]}
					icon={currentIcon.value}
					color={null}
					label=""
					removeDefaultClasses
				/>
			</div>
		);
	}
);
