import { Resource, Slot, component$, useResource$ } from "@builder.io/qwik";
import type { IconDefinition } from "@fortawesome/fontawesome-common-types";
import Fa from "~/includes/fa";

interface Props {
	icons: IconDefinition[];
	class?: string;
	density?: number;
	negativeMargin?: number;
	ratio?: [number, number];
}

/**
 * Wrapper component puts content in a card with a background image of icons.
 *
 * @param {Props} props
 * @param {IconDefinition[]} props.icons Array of icons to use as background
 * @param {string} [props.class=""] CSS class name
 * @param {number} [density=1] Relative to ratio, how many icons to render (e.g. 4/3 means 4x3 icons at density 1)
 * @param {string} [props.neagtiveMargin=20] (px) How much to extend the background image outside the card
 * @param {[number, number]} [props.ratio=[4, 3]] Aspect ratio of the card
 */
export default component$(
	({
		icons,
		class: className,
		density = 1,
		negativeMargin = 20,
		ratio = [4, 3],
	}: Props) => {
		const [width, height] = ratio;

		const iconsToRender = useResource$(() => {
			const totalIcons =
				width * height * Math.pow(density, 2) * (width / height);

			// Repeat icons to fill the container
			return [...Array(totalIcons)].map((_, i) => {
				const icon = icons[i % icons.length];
				return (
					<Fa
						key={`${icon.iconName}-${i}`}
						icon={icon}
						class="fa-primary-gray-300 fa-secondary-gray-300 rotate-45 mix-blend-soft-light dark:mix-blend-color-burn opacity-80 dark:opacity-60 text-3xl"
						opacity={[1, 0.66]}
					/>
				);
			});
		});

		return (
			<div
				class={[
					"relative px-10 py-20 rounded-3xl flex justify-center flex-col leading-none content-around items-center overflow-hidden shadow-lg hover:scale-110 transition-transform duration-500",
				]}
				style={`aspect-ratio: ${width}/${height}`}
			>
				<Resource
					value={iconsToRender}
					onResolved={(icons) => (
						<div
							class={[
								"absolute h-full top-0 left-0 pointer-events-none grid z-0 place-items-center",
								className,
							]}
							style={`
              	margin: -${negativeMargin}px;
              	width: calc(100% + ${negativeMargin * 2}px);
              	height: calc(100% + ${negativeMargin * 2}px);
              	grid-template-columns: repeat(${Math.round(width * density)}, minmax(0, 1fr));
              	grid-template-rows: repeat(${Math.round(height * density)}, minmax(0, 1fr));
              `}
						>
							{icons}
						</div>
					)}
				/>
				<div class="relative z-10">
					<Slot />
				</div>
			</div>
		);
	},
);
