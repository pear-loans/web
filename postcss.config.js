const pkg = require("./package.json");

module.exports = {
	plugins: {
		tailwindcss: {},
		"postcss-variable-compress": {},
		"postcss-lightningcss": {
			browsers: pkg.browserslist,
		},
	},
};
