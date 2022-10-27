import type { FieldError } from "react-hook-form";
import type { SelectProps as ChakraSelectProps } from "@chakra-ui/react";

interface OptionProps {
	value: string;
	optionName?: string;
}

export interface SelectProps extends ChakraSelectProps {
	name: string;
	label?: string;
	error?: FieldError;
	options: Array<OptionProps>;
}