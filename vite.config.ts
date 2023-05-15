import type { UserConfigExport } from "vite";
import plugin_html from "vite-plugin-minify";
import plugin_lightning from "vite-plugin-lightningcss";
import plugin_preload from "vite-plugin-inject-preload";
import { VitePWA as plugin_pwa } from "vite-plugin-pwa";
import plugin_solid from "vite-plugin-solid";

import postcss_variables from "postcss-variable-compress";
import postcss_tailwind from "tailwindcss";

export default {
	build: {
		modulePreload: {
			polyfill: false,
		},
		target: "ESNext",
	},
	css: {
		postcss: {
			plugins: [postcss_tailwind(), postcss_variables()],
		},
	},
	esbuild: {
		legalComments: "none",
		mangleProps: /(^_[a-zA-Z0-9]*)|([a-zA-Z0-9$]*_)$/,
	},
	plugins: [
		plugin_solid(),
		plugin_lightning({
			browserslist: "> 5% in US and not dead",
			sourceMap: false,
		}),
		plugin_pwa({ injectRegister: "inline" }),
		plugin_preload({
			files: [
				{
					match: /index-[A-z0-9]*\.js$/,
					attributes: {
						crossorigin: "anonymous",
						rel: "modulepreload",
					},
				},
				{
					match: /index-[A-z0-9]*\.css$/,
				},
				{
					attributes: {
						crossorigin: "anonymous",
						rel: "prefetch",
					},
					match: /[A-z0-9]*\.page\-[A-z0-9]*\.js$/,
				},
			],
		}),
		plugin_html({
			collapseWhitespace: true,
			minifyCSS: true,
			minifyJS: true,
			minifyURLs: true,
			removeAttributeQuotes: true,
			removeComments: true,
			removeRedundantAttributes: true,
			sortAttributes: true,
			sortClassNames: true,
		}),
	],
	resolve: {
    alias: [
      { find: /^🍐/, replacement: new URL("./src/", import.meta.url).pathname },
    ],
  },
} satisfies UserConfigExport;
