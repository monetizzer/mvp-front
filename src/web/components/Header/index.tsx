import { Box, Flex, Heading } from "@chakra-ui/react"

export const Header: React.FC = () => {
	return (
		<Box bgColor="pGray.800">
      <Flex
        justifyContent="space-between"
        alignItems="center"
        maxW={1120}
        mx="auto"
        px={20}
        py={6}
      >
        <Heading>Monetizzer</Heading>
      </Flex>
    </Box>
	)
}