import type { Config } from "tailwindcss";
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
	content: ["src/**/*.{js,jsx,ts,tsx}", "index.html"],
	experimental: "all",
	theme: {
		extend: {
			fontFamily: {
				sans: [...defaultTheme.fontFamily.sans]
			}
		}
	}
} satisfies Config;
