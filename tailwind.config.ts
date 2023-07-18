import type { Config } from "tailwindcss";
// @ts-expect-error Tailwind doesn't have types for this yet.
import flattenColors from "tailwindcss/lib/util/flattenColorPalette";
import plugin from "tailwindcss/plugin";

export default {
	content: ["src/**/*.{js,jsx,ts,tsx}"],
	darkMode: "class",
	experimental: "all",
	plugins: [
		plugin(({ matchUtilities, theme }) => {
			// Sets nested icons width/height to match line height, when using the text utility.
			// e.g., <container class="text-xl"> creates an icon with the line height of text-xl.
			matchUtilities(
				{
					text: ([size, { lineHeight }]) => {
						const [number, unit] = size.split(/(?<=\d)(?=[a-z])/i);
						const [lineNumber] = lineHeight.split(/(?<=\d)(?=[a-z])/i);
						const valueToUse = `${Math.max(number, lineNumber)}${
							unit || "rem"
						}`;
						return {
							"&.fa": {
								width: valueToUse,
								height: valueToUse,
							},
						};
					},
				},
				{ values: theme("fontSize") },
			);
			// Sets the primary/secondary colors for font awesome icon.
			matchUtilities(
				{
					"fa-primary": (value) => ({
						"--fa-primary": value,
					}),
					"fa-secondary": (value) => ({
						"--fa-secondary": value,
					}),
					"stop-color": (value) => ({
						"stop-color": value,
					}),
				},
				{ values: flattenColors(theme("colors")) },
			);
			// Creates animate-delay-{duration} utility.
			matchUtilities(
				{
					"animate-delay": (value) => ({
						"animation-delay": value,
					}),
				},
				{ values: theme("transitionDuration") },
			);
		}),
	],
	theme: {
		extend: {
			colors: {
				brands: {
					// https://discord.com/branding
					discord: "#5865F2",
					// https://developers.google.com/identity/branding-guidelines
					google: "#5383ee",
				},
			},
			screens: {
				xs: "480px",
			},
			keyframes: {
				wiggle: {
					"0%, 100%": { transform: "rotate(calc(0deg + var(--tw-rotate, 0)))" },
					"25%": { transform: "rotate(calc(-8deg + var(--tw-rotate, 0)))" },
					"75%": { transform: "rotate(calc(8deg + var(--tw-rotate, 0)))" },
				},
				"fade-in-up": {
					"0%": {
						opacity: "0",
						transform: "translateY(5rem) rotate(var(--tw-rotate, 0))",
					},
					"100%": {
						opacity: "1",
						transform: "translateY(0) rotate(var(--tw-rotate, 0))",
					},
				},
				"fade-in-down": {
					"0%": {
						opacity: "0",
						transform: "translateY(-5rem) rotate(var(--tw-rotate, 0))",
					},
					"100%": {
						opacity: "1",
						transform: "translateY(0) rotate(var(--tw-rotate, 0))",
					},
				},
			},
			animation: {
				wiggle: "wiggle 700ms linear infinite",
				"fade-in-up": "fade-in-up 700ms ease-out",
				"fade-in-down": "fade-in-down 700ms ease-out",
			},
		},
	},
} satisfies Config;
