import type { InputProps as ChakraInputProps } from "@chakra-ui/react";

import type { FieldError } from "react-hook-form";

export interface InputProps extends ChakraInputProps {
	name: string;
	label?: string;
	error?: FieldError;
	leftAddon?: string;
	rightAddon?: string;
}