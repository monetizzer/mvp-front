import type { IconsType } from "components/Icon/assets";

interface ISocialNetwork {
	name: IconsType;
	color: string;
	url: string;
}

export const SOCIAL_NETWORKS: Array<ISocialNetwork> = [
	{
		name: "google",
		color: "var(--chakra-colors-google)",
		url: "#",
	},
	{
		name: "twitter",
		color: "var(--chakra-colors-twitter)",
		url: "#",
	},
	{
		name: "discord",
		color: "var(--chakra-colors-discord)",
		url: "#",
	},
	{
		name: "facebook",
		color: "var(--chakra-colors-facebook)",
		url: "#",
	},
];
