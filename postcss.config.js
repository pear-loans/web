module.exports = {
  plugins: [
    require("tailwindcss")(),
    require("postcss-lightningcss")({
      // TODO: This shouldn't be needed but this plugin does not repsect
      // browserslist config in package.json or .browserlistrc
      browsers: "> 5% in US and not dead",
      sourcemap: false,
    }),
    require("postcss-variable-compress"),
  ],
};
