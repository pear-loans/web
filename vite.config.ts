import { qwikCity } from "@builder.io/qwik-city/vite";
import { qwikVite } from "@builder.io/qwik/optimizer";

import postcss_lightningcss from "postcss-lightningcss";
import postcss_variablecompress from "postcss-variable-compress";
import postcss_tailwind from "tailwindcss";

import vite_paths from "vite-tsconfig-paths";

import { defineConfig } from "vite";

import { browserslist } from "./package.json";

export default defineConfig(() => ({
	plugins: [qwikCity(), qwikVite(), vite_paths()],
	optimizeDeps: {
		include: ["@auth/core"],
	},
	preview: {
		headers: {
			"Cache-Control": "public, max-age=600",
		},
	},
}));
