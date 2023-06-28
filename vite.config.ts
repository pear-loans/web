import { qwikCity } from "@builder.io/qwik-city/vite";
import { qwikVite } from "@builder.io/qwik/optimizer";

import postcss_variables from "postcss-variable-compress";
import postcss_tailwind from "tailwindcss";

import vite_lightningcss from "vite-plugin-lightningcss";
import vite_paths from "vite-tsconfig-paths";

import type { UserConfig } from "vite";

import { browserslist } from "./package.json";

export default {
	plugins: [
		vite_paths(),
		qwikCity(),
		qwikVite(),
		vite_lightningcss({ browserslist }),
	],
	css: {
		postcss: {
			plugins: [postcss_tailwind(), postcss_variables()],
		},
	},
	optimizeDeps: {
		include: ["@auth/core"],
	},
	preview: {
		headers: {
			"Cache-Control": "public, max-age=600",
		},
	},
} satisfies UserConfig;
