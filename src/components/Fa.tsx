import { component$ } from "@builder.io/qwik";
import type { IconDefinition } from "@fortawesome/fontawesome-common-types";

export const FA_CLASS = "fa";

interface Props {
	icon: IconDefinition;
	class?: string;
	color?: [string, string?] | string;
	opacity?: [number, number?] | number;
	title?: string;
	style?: string | Record<string, string>;
}

/**
 * ### Creates a FontAwesome icon
 *
 * @param {Props} props
 * @param {Props['icon']} props.icon Icon to render imported from FontAwesome
 * @param {Props['class']} [class="w-7"] CSS class name, if any
 * @param {Props['color']} [props.color=1] Primary and secondary colors. If only one color is provided, it will be used for both
 * @param {Props['opacity']} [props.opacity=[undefined, undefined]] Primary and secondary opacity. If only one opacity is provided, it will be used for both
 * @param {Props['title']} [props.title="Icon"] Title to add to the icon for accessibility
 * @param {Props['style']} [props.style=""] Style to add to the icon
 *
 * @returns {Component<Props>}
 */
export default component$((props: Props) => {
	const {
		icon: { icon = [0, 0, "", [], ""] } = {},
		class: className = "w-5 h-5",
		opacity = [],
		title = undefined,
		style = undefined
	} = props;

	const [primaryOpacity, secondaryOpacity] = Array.isArray(opacity) ? opacity : [opacity];

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class={[FA_CLASS, className]}
			viewBox={`0 0 ${icon[0]} ${icon[1]}`}
			role={title ? undefined : "presentation"}
			style={style}
		>
			{title && <title>{title}</title>}
			<g
				transform={`translate(${icon[0] / 2} ${icon[1] / 2})`}
				transform-origin={`${icon[0] / 4} 0`}
			>
				<g>
					{typeof icon[4] === "string" ? (
						<path
							d={icon[4]}
							transform={`translate(${icon[0] / -2} ${icon[1] / -2})`}
							style={primaryOpacity ? `fill-opacity: ${primaryOpacity || 1}` : undefined}
						/>
					) : (
						<>
							<path
								d={icon[4][0]}
								transform={`translate(${icon[0] / -2} ${icon[1] / -2})`}
								style={primaryOpacity ? `fill-opacity: ${primaryOpacity || 1}` : undefined}
							/>
							<path
								d={icon[4][1]}
								transform={`translate(${icon[0] / -2} ${icon[1] / -2})`}
								style={
									primaryOpacity
										? `fill-opacity: ${secondaryOpacity || primaryOpacity || 1}`
										: undefined
								}
							/>
						</>
					)}
				</g>
			</g>
		</svg>
	);
});
