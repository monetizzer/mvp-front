const disabledButton = {
	opacity: "0.4 !important",
	cursor: "not-allowed",
};

export const Button = {
	variants: {
		base: {
			bg: "vividPrimary",
			color: "firstText",
			size: "lg",
			border: "2px solid",
			borderColor: "transparent",
			_hover: {
				opacity: 0.8,
				_disabled: {
					bg: "button",
				},
			},
			_focus: {
				opacity: 0.8,
				boxShadow: "0 0 0 3px outline	",
			},
			_disabled: disabledButton,
		},
	},
	defaultProps: {
		variant: "base",
	},
};
