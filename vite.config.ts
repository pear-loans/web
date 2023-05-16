import { defineConfig } from 'vite';
import { qwikVite as plugin_qwik } from '@builder.io/qwik/optimizer';
import { qwikCity as plugin_qwikCity } from '@builder.io/qwik-city/vite';
import plugin_lightning from "vite-plugin-lightningcss";

import postcss_variables from "postcss-variable-compress";
import postcss_tailwind from "tailwindcss";

export default defineConfig(() => {
  return {
    plugins: [plugin_qwikCity(), plugin_qwik(), plugin_lightning(), postcss_variables()],
    css: {
      postcss: {
        plugins: [postcss_tailwind()],
      },
    },
    preview: {
      headers: {
        'Cache-Control': 'public, max-age=600',
      },
    },
    resolve: {
      alias: [
        { find: /^🍐/, replacement: new URL("./src/", import.meta.url).pathname },
      ],
    },
  };
});
