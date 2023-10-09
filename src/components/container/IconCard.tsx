import { Slot, component$ } from "@builder.io/qwik";
import type { IconDefinition } from "@fortawesome/fontawesome-common-types";
import Fa from "~/components/Fa";

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
 * @param {string} [props.class=undefined] CSS class name
 * @param {number} [density=1] Relative to ratio, how many icons to render (e.g. 4/3 means 4x3 icons at density 1)
 * @param {string} [props.neagtiveMargin=20] (px) How much to extend the background image outside the card
 * @param {[number, number]} [props.ratio=[4, 3]] Aspect ratio of the card
 */
export default component$(
	({ icons, class: className, density = 1, negativeMargin = 20, ratio = [4, 3] }: Props) => {
		const [width, height] = ratio;
		const totalIcons = width * height * Math.pow(density, 2) * (width / height);

		return (
			<div
				class="relative flex flex-col content-around items-center justify-center overflow-hidden rounded-3xl px-10 py-20 leading-none shadow-lg transition-transform duration-500 hover:scale-105 md:hover:scale-110"
				style={{ "aspect-ratio": `${width}/${height}` }}
			>
				<div
					class={[
						"absolute h-full top-0 left-0 pointer-events-none grid z-0 place-items-center",
						className
					]}
					style={{
						margin: `${negativeMargin * -1}px`,
						width: `calc(100% + ${negativeMargin * 2}px)`,
						height: `calc(100% + ${negativeMargin * 2}px)`,
						"grid-template-columns": `repeat(${Math.round(width * density)}, minmax(0, 1fr))`,
						"grid-template-rows": `repeat(${Math.round(height * density)}, minmax(0, 1fr))`
					}}
				>
					{[...Array(totalIcons)].map((_, i) => {
						const icon = icons[i % icons.length];
						return (
							<Fa
								key={`${icon.iconName}-${i}`}
								icon={icon}
								class="w-10 rotate-45 text-3xl opacity-80 mix-blend-soft-light dark:opacity-60"
								opacity={[0.75, 0.5]}
							/>
						);
					})}
				</div>
				<div class="relative z-10">
					<Slot />
				</div>
			</div>
		);
	}
);
