/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				default: ["roboto", "sans-serif"],
			},
		},
		screens: {
			xs: "475px",
			...defaultTheme.screens,
		},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: [
			{
				lasmusas: {
					primary: "#803b7e",
					"primary-content": "#ffffff",
					secondary: "#ae4c7c",
					"secondary-content": "#ffffff",
					accent: "#f9daf4",
					neutral: "#ae4c7c",
					"neutral-content": "#ffffff",
					"base-100": "#F2E3EF",
					"base-content": "#333333",
					".btn-discord": {
						"background-color": "#5865F2",
					},
					".btn-discord:hover": {
						"background-color": "#3442d9",
					},
				},
			},
		],
	},
};
