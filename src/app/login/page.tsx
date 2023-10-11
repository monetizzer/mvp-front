"use client";

import Link from "next/link";
import { BsDiscord } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

export default function Login() {
	return (
		<div className="flex items-center justify-center flex-col">
			<Link
				type="button"
				title="Logar com discord"
				className="text-white btn btn-discord rounded-xl w-full"
				href={process.env["NEXT_PUBLIC_DISCORD_LINK_AUTH"]!}
			>
				<BsDiscord className="mr-2" />
				Discord
			</Link>
			<div className="divider">OU</div>
			<button
				type="button"
				title="Logar com email"
				className="btn btn-secondary rounded-xl w-full"
			>
				<MdEmail className="mr-2" />
				E-mail
			</button>
		</div>
	);
}
