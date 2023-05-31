import { defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import postcss_variables from "postcss-variable-compress";
import postcss_tailwind from "tailwindcss";
import postcss_lightningcss from "postcss-lightningcss";

import { browserslist } from "./package.json";

export default defineConfig(() => ({
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
	optimizeDeps: {
		disabled: false,
	},
	preview: {
		headers: {
			"Cache-Control": "public, max-age=600",
		},
	},
}));
