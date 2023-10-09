import { qwikCity } from "@builder.io/qwik-city/vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import unocss from "unocss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(() => {
	return {
		build: {
			rollupOptions: {
				external: ["@miniflare/d1", "@miniflare/shared"]
			}
		},
		optimizeDeps: {
			include: ["@auth/core"]
		},
		plugins: [unocss(), qwikCity(), qwikVite(), tsconfigPaths()],
		preview: {
			headers: {
				"Cache-Control": "public, max-age=600"
			}
		}
	};
});
