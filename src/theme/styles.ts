/* eslint-disable @typescript-eslint/naming-convention */

export const styles = {
	global: {
		"*": {
			margin: 0,
			padding: 0,
			boxSizing: "border-box",
		},

		"html, body": {
			minHeight: "full",
		},

		"html": {
			fontSize: "13.44px",
			scrollBehavior: "smooth",
		},

		"body": {
			background: "background",
			color: "firstText",
			fontFamily: "roboto",
			fontSize: "text.1",
			fontWeight: "normal",
			lineHeight: "text.1",
		},

		"a": {
			color: "firstText",
			textDecoration: "none",
		},

		"button, input, textarea": {
			background: "transparent",
			color: "firstText",
			fontSize: "text.1",
			fontWeight: "normal",
			lineHeight: "text.1",
			border: "transparent",
		},

		"ul": {
			listStyle: "none",
		},

		"@media (min-width: 375px)": {
			html: {
				fontSize: "14.08px",
			},
		},

		"@media (min-width: 475px)": {
			html: {
				fontSize: "14.72px",
			},
		},

		"@media (min-width: 640px)": {
			html: {
				fontSize: "15.36px",
			},
		},

		"@media (min-width: 768px)": {
			html: {
				fontSize: "16px",
			},
		},
	},
};
