import type { IconsType } from "components/Icon/assets";
import { ICONS } from "components/Icon/assets";
import type { IconType } from "react-icons";

interface ISocialNetwork {
	name: IconsType;
	icon: IconType;
	color: string;
	url: string;
}

export const SOCIAL_NETWORKS: Array<ISocialNetwork> = [
	{
		name: "google",
		icon: ICONS.google,
		color: "var(--chakra-colors-google)",
		url: "#",
	},
	{
		name: "twitter",
		icon: ICONS.twitter,
		color: "var(--chakra-colors-twitter)",
		url: "#",
	},
	{
		name: "discord",
		icon: ICONS.discord,
		color: "var(--chakra-colors-discord)",
		url: "#",
	},
	{
		name: "facebook",
		icon: ICONS.facebook,
		color: "var(--chakra-colors-facebook)",
		url: "#",
	},
];
