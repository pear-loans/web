import { component$ } from "@builder.io/qwik";
import type { IconDefinition } from "@fortawesome/fontawesome-common-types";

export const FA_CLASS = "fa";
interface Props {
	class?: string; // Classes to add to the icon
	color?: [string, string?] | string; // Primary and secondary colors. If only one color is provided, it will be used for both.
	icon: IconDefinition; // Icon to render imported from FontAwesome.
	opacity?: [number, number?] | number; // Primary and secondary opacity. If only one opacity is provided, it will be used for both.
	title?: string; // Title to add to the icon for accessibility.
	style?: string | Record<string, string>; // Style to add to the icon.
}
export default component$((props: Props) => {
	const {
		class: className,
		opacity = [0.75, 1],
		icon: { icon = [0, 0, "", [], ""] } = {},
		title = "Icon",
		style = "",
	} = props;

	const [primaryOpacity, secondaryOpacity] = Array.isArray(opacity)
		? opacity
		: [opacity];

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class={[FA_CLASS, className]}
			viewBox={`0 0 ${icon[0]} ${icon[1]}`}
			role="presentation"
			style={style}
		>
			<title>{title}</title>
			<g
				transform={`translate(${icon[0] / 2} ${icon[1] / 2})`}
				transform-origin={`${icon[0] / 4} 0`}
			>
				<g>
					{typeof icon[4] === "string" ? (
						<path
							d={icon[4]}
							transform={`translate(${icon[0] / -2} ${icon[1] / -2})`}
						/>
					) : (
						<>
							<path
								d={icon[4][0]}
								fill-opacity={primaryOpacity || 1}
								transform={`translate(${icon[0] / -2} ${icon[1] / -2})`}
							/>
							<path
								d={icon[4][1]}
								fill-opacity={secondaryOpacity || primaryOpacity || 1}
								transform={`translate(${icon[0] / -2} ${icon[1] / -2})`}
							/>
						</>
					)}
				</g>
			</g>
		</svg>
	);
});
