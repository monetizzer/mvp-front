import {
	FormControl,
	FormErrorMessage,
	InputLeftAddon,
	InputRightAddon,
	FormLabel,
	Input as ChakraInput,
	InputGroup,
} from "@chakra-ui/react";
import type { ForwardRefRenderFunction } from "react";
import { forwardRef } from "react";
import { InputProps } from "./types";

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
	{ name, label, error = null, leftAddon, rightAddon, ...rest },
	ref
) => {
	return (
		<FormControl isInvalid={Boolean(error)}>
			{Boolean(label) && <FormLabel htmlFor={name}>{label}</FormLabel>}
			<InputGroup>
				{leftAddon && (
					<InputLeftAddon bg="gray.600" h="12" border="none">
						{leftAddon}
					</InputLeftAddon>
				)}
				<ChakraInput
					name={name}
					id={name}
					focusBorderColor="pink.500"
					bg="gray.900"
					variant="filled"
					_hover={{
						bg: "gray.900",
					}}
					size="lg"
					ref={ref}
					{...rest}
				/>
				{rightAddon && (
					<InputRightAddon bg="gray.600" h="12" border="none">
						{rightAddon}
					</InputRightAddon>
				)}
			</InputGroup>

			{Boolean(error) && <FormErrorMessage>{error?.message}</FormErrorMessage>}
		</FormControl>
	);
};

export const Input = forwardRef(InputBase);
