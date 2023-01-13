import type { IconProps } from "@chakra-ui/react";
import { Icon as ChakraIcon } from "@chakra-ui/react";

import type { IconsType } from "./assets/index";
import { ICONS } from "./assets/index";

interface Props extends IconProps {
	name: IconsType;
}

export const Icon: FC<Props> = ({ name, ...props }) => {
	const icon = ICONS[name];

	return <ChakraIcon as={icon} {...props} />;
};
