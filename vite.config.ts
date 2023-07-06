import { qwikCity } from "@builder.io/qwik-city/vite";
import { qwikVite } from "@builder.io/qwik/optimizer";

import vite_paths from "vite-tsconfig-paths";

import { defineConfig } from "vite";

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
