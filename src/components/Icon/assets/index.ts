import { MdAlternateEmail } from "react-icons/md";
import { SiGoogle, SiTwitter, SiDiscord } from "react-icons/si";
import { SlSocialFacebook } from "react-icons/sl";

export const ICONS = {
	email: MdAlternateEmail,
	google: SiGoogle,
	twitter: SiTwitter,
	discord: SiDiscord,
	facebook: SlSocialFacebook,
};

export type IconsType = keyof typeof ICONS;
