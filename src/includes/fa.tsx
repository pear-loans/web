import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import { component$ } from "@builder.io/qwik";

export const FA_CLASS = "fa";
interface IconProps {
	class?: string;
	color?: [string, string?] | string;
	icon: IconDefinition;
	opacity?: [number, number?] | number;
	title?: string;
}
export const Fa = component$((props: IconProps) => {
	const {
		class: className,
		opacity = [0.75, 1],
		icon: { icon = [0, 0, "", [], ""] } = {},
		title = "Icon",
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
