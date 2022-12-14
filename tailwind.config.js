/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.tsx"],
  darkMode: "class",
  experimental: "all",
  theme: {
    extend: {
      transitionProperty: {
        direction: "right, bottom, left, top",
        height: "min-height, max-height, height",
      },
    },
  },
};
