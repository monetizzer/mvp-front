import type { TextareaProps as ChakraTextareaProps } from "@chakra-ui/react";

import type { FieldError } from "react-hook-form";

export interface TextareaProps extends ChakraTextareaProps {
	label?: string;
	error?: FieldError;
	leftAddon?: string;
	rightAddon?: string;
}