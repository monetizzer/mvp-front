import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";

export const Aside: FC = () => (
	<Flex
		as="aside"
		position="relative"
		flex={{ bp6: "7" }}
		minH={{ base: "55vh", bp6: "100vh" }}
		h="full"
		maxH={{ base: "55vh", bp6: "100vh" }}
		sx={{
			// eslint-disable-next-line @typescript-eslint/naming-convention
			"> img": {
				objectFit: "cover",
			},
		}}
	>
		<Box
			position="absolute"
			top="0"
			right="0"
			bottom="0"
			left="0"
			bgGradient="linear(to-t, #000000CC, #00000000)"
			zIndex="1"
		/>
		<Image
			src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.iqNstYzCGjToqTb_yOeK_QHaFj%26pid%3DApi&f=1&ipt=6b9779b9df9b1d801a653779bb503a321942bfef5d0b26b5fa9f3bcbc2a7995f&ipo=images"
			alt="Mulher"
			fill
		/>
	</Flex>
);
