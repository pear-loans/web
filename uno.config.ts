import { defineConfig } from "unocss";
import presetUno from "unocss/preset-uno";

export default defineConfig({
	presets: [presetUno()],
	shortcuts: {
		"fade-up": "animate-fade-in-up animate-forwards opacity-0 animate-duration-700",
		"fade-down": "animate-fade-in-down animate-forwards opacity-0"
	},
	theme: {
		colors: {
			brand: {
				// https://discord.com/branding
				discord: "#5865F2",
				// https://developers.google.com/identity/branding-guidelines
				google: "#5383ee"
			}
		}
	}
});
