/* eslint-disable @typescript-eslint/naming-convention */

import { extendTheme } from "@chakra-ui/react";

import { Button } from "./components/button";
import { Heading } from "./components/heading";
import { Input } from "./components/input";
import { styles } from "./styles";

const customTheme = {
	semanticTokens: {
		colors: {
			vividPrimary: "linear-gradient(88.11deg, #ED213A 0%, #93291E 100%);",
			primary: {
				_dark: "linear-gradient(360deg, #131318 37.28%, #00000000 99.41%)",
			},
			secondary: {
				_dark: "#1E1D24",
			},
			background: "primary",
			firstText: {
				_dark: "#E6E6E9",
			},
			secondText: {
				_dark: "#A0A0A0",
			},
			alternate: {
				_dark: "#525252",
			},
			outline: {
				_dark: "#FFFFFF",
			},
			link: "vividPrimary",
			button: "vividPrimary",
			error: "red.500",
			google: "#4285F4",
			twitter: "#1DA1F2",
			discord: "#5865F2",
			facebook: "#1877F2",
		},
	},
	shadows: {
		outline: "0 0 0 3px var(--chakra-colors-outline)",
	},
	fonts: {
		sora: "Sora, sans-serif",
	},
	fontSizes: {
		heading: {
			1: "4rem", // 64px
			2: "3rem", // 48px
			3: "2rem", // 32px
			4: "1.5rem", // 24px
		},
		text: {
			0.5: "1.125rem", // 18px
			1: "1rem", // 16px
			2: "0.875rem", // 14px
			3: "0.75rem", // 12px
			4: "0.625rem", // 10px
		},
	},
	fontWeights: {
		light: 300,
		normal: 400,
		medium: 500,
		bold: 700,
		heading: {
			1: "bold",
			2: "bold",
			3: "bold",
			4: "medium",
		},
		text: {
			0.5: "normal",
			1: "normal",
			2: "normal",
			3: "normal",
			4: "normal",
		},
	},
	lineHeights: {
		heading: {
			1: "4.625rem", // 74px
			2: "3.625rem", // 58px
			3: "2.625rem", // 42px
			4: "2.125rem", // 34px
		},
		text: {
			0.5: "1.75em", // 28px
			1: "1.625rem", // 26px
			2: "1.5rem", // 24px
			3: "1.25rem", // 20px
			4: "1.125rem", // 18px
		},
	},
	space: {
		verticalPadding: "1.25rem", // 20px
		horizontalPadding: "1.25rem", // 20px
		px: "1px",
		0.5: "0.125rem", // 2px
		1: "0.25rem", // 4px
		1.5: "0.375rem", // 6px
		2: "0.5rem", // 8px
		2.5: "0.625rem", // 10px
		3: "0.75rem", // 12px
		3.5: "0.875rem", // 14px
		4: "1rem", // 16px
		5: "1.25rem", // 20px
		6: "1.5rem", // 24px
		7: "1.75rem", // 28px
		8: "2rem", // 32px
		9: "2.25rem", // 36px
		10: "2.5rem", // 40px
		12: "3rem", // 48px
		14: "3.5rem", // 56px
		16: "4rem", // 64px
		20: "5rem", // 80px
		24: "6rem", // 96px
		28: "7rem", // 112px
		32: "8rem", // 128px
		36: "9rem", // 144px
		40: "10rem", // 160px
		44: "11rem", // 176px
		48: "12rem", // 192px
		52: "13rem", // 208px
		56: "14rem", // 224px
		60: "15rem", // 240px
		64: "16rem", // 256px
		72: "18rem", // 288px
		80: "20rem", // 320px
		96: "24rem", // 384px
	},
	sizes: {
		"lessThanHalf": "25%",
		"half": "50%",
		"moreThanHalf": "75%",
		"full": "100%",
		"3xs": "14rem", // 224px
		"2xs": "16rem", // 256px
		"xs": "20rem", // 320px
		"sm": "24rem", // 384px
		"md": "28rem", // 448px
		"lg": "32rem", // 512px
		"xl": "36rem", // 576px
		"2xl": "42rem", // 672px
		"3xl": "48rem", // 768px
		"4xl": "56rem", // 896px
		"5xl": "64rem", // 1024px
		"6xl": "72rem", // 1152px
		"7xl": "80rem", // 1280px
		"8xl": "90rem", // 1440px
		"container": {
			"sectionMaxWidth": "1128px",
			"4xs": "280px",
			"3xs": "320px",
			"2xs": "375px",
			"xs": "425px",
			"sm": "640px",
			"md": "768px",
			"lg": "1024px",
			"xl": "1280px",
		},
	},
	radii: {
		"none": 0,
		"sm": "2px",
		"base": "4px",
		"md": "6px",
		"lg": "8px",
		"xl": "12px",
		"2xl": "16px",
		"3xl": "24px",
		"round": "50%",
		"full": "9999px",
	},
	zIndices: {
		auto: "auto",
		hide: -1,
		base: 0,
		1: "100",
		2: "200",
		3: "300",
		4: "400",
		5: "500",
		6: "600",
		7: "700",
		8: "800",
		9: "900",
		max: "999",
	},
	breakpoints: {
		bp1: "280px",
		bp2: "320px",
		bp3: "375px",
		bp4: "425px",
		bp5: "640px",
		bp6: "768px",
	},
	styles,
	components: {
		Button,
		Heading,
		Input,
	},
	config: {
		initialColorMode: "dark",
		useSystemColorMode: false,
	},
};

export const theme = extendTheme(customTheme);
