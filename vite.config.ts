import { defineConfig } from "vite";
import pluginPreload from "vite-plugin-inject-preload";
import lightningcss from "vite-plugin-lightningcss";
import pluginMinify from "vite-plugin-minify";
import { VitePWA } from "vite-plugin-pwa";
import pluginSolid from "vite-plugin-solid";

export default defineConfig({
  build: {
    commonjsOptions: { include: [] },
    modulePreload: {
      polyfill: false,
    },
    target: "esnext",
  },
  esbuild: {
    legalComments: "none",
    // starts or ends with underscore
    mangleProps: /(^_[a-zA-Z0-9]*)|([a-zA-Z0-9$]*_)$/,
  },
  optimizeDeps: {
    disabled: false,
  },
  plugins: [
    pluginPreload({
      files: [
        {
          attributes: {
            crossorigin: "anonymous",
            rel: "modulepreload",
          },
          match: /index\.[A-z0-9]*\.js$/,
        },
        {
          attributes: {
            crossorigin: "anonymous",
            rel: "prefetch",
          },
          match: /[A-z0-9]*\.page\.[A-z0-9]*\.js$/,
        },
      ],
    }),
    pluginSolid(),
    VitePWA({
      injectRegister: "inline",
      registerType: "autoUpdate",
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
      },
    }),
    lightningcss({
      browserslist: "> 5% in US and not dead",
      sourceMap: false,
    }),
    pluginMinify({
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
});
