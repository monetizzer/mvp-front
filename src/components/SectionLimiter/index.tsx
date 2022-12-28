import { Flex } from "@chakra-ui/react";
import type { ReactNode } from "react";

interface Props {
	children: ReactNode;
}

export const SectionLimiter: FC<Props> = ({ children }) => (
	<Flex
		direction="column"
		align="center"
		justify="center"
		px="horizontalPadding"
	>
		<Flex w="full" maxW="sectionMaxWidth">
			{children}
		</Flex>
	</Flex>
);
