import { qwikCity } from "@builder.io/qwik-city/vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import postcss_lightningcss from "postcss-lightningcss";
import postcss_variables from "postcss-variable-compress";
import postcss_tailwind from "tailwindcss";
import tsconfigPaths from "vite-tsconfig-paths";

import type { UserConfig } from "vite";

import { browserslist } from "./package.json";

export default {
	plugins: [tsconfigPaths(), qwikCity(), qwikVite()],
	css: {
		postcss: {
			plugins: [
				postcss_tailwind(),
				postcss_variables(),
				postcss_lightningcss({ browsers: browserslist }),
			],
		},
	},
	preview: {
		headers: {
			"Cache-Control": "public, max-age=600",
		},
	},
} satisfies UserConfig;
