import type { LinkProps } from "@chakra-ui/react";
import { Link as ChakraLink } from "@chakra-ui/react";
import NextLink from "next/link";
import type { ReactNode } from "react";

interface Props extends LinkProps {
	children: ReactNode;
}

export const Link: FC<Props> = ({ children, ...props }) => (
	<ChakraLink as={NextLink} {...props}>
		{children}
	</ChakraLink>
);
