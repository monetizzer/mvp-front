import { AiOutlineUser } from "react-icons/ai";
import { MdAlternateEmail } from "react-icons/md";
import { SiGoogle, SiTwitter, SiDiscord } from "react-icons/si";
import { SlSocialFacebook } from "react-icons/sl";

export const ICONS = {
	email: MdAlternateEmail,
	google: SiGoogle,
	twitter: SiTwitter,
	discord: SiDiscord,
	facebook: SlSocialFacebook,
	user: AiOutlineUser,
};

export type IconsType = keyof typeof ICONS;
