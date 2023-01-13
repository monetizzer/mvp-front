const disabledInput = {
	opacity: "0.4 !important",
	cursor: "not-allowed",
};

export const Input = {
	variants: {
		base: {
			field: {
				bg: "transparent",
				color: "secondText",
				borderBottom: "1px solid",
				borderColor: "inherit",
				borderRadius: "0",
				px: "0",
				_readOnly: {
					boxShadow: "none !important",
					userSelect: "all",
				},
				_invalid: {
					borderColor: "error",
					boxShadow: "0 1px 0 0 error",
				},
				_focus: {
					borderColor: "outline",
					boxShadow: "0 1px 0 0 outline",
					zIndex: 1,
				},
				_disabled: disabledInput,
				_placeholder: {
					color: "secondText",
				},
			},
			addon: {
				bg: "transparent",
				color: "secondText",
				borderBottom: "2px solid",
				borderColor: "inherit",
				borderRadius: "0",
				px: "0",
			},
		},
	},
	defaultProps: {
		variant: "base",
	},
};
