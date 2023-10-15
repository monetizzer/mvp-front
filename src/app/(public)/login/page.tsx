import Link from "next/link";
import { BsDiscord } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const DISCORD_LINK_AUTH = process.env["DISCORD_LINK_AUTH"];

const Auth = () => {
	return (
		<>
			<header className="card-body flex items-center justify-center w-full mb-8">
				<h2 className="card-title text-3xl text-center">
					Entrar ou criar conta
				</h2>
			</header>
			<div className="flex items-center justify-center flex-col">
				<Link
					type="button"
					title="Logar com discord"
					className="text-white btn btn-discord w-full"
					href={DISCORD_LINK_AUTH || "#"}
				>
					<BsDiscord className="mr-2" />
					Discord
				</Link>
				<div className="divider">OU</div>
				<Link
					type="Link"
					title="Logar com email"
					className="btn btn-secondary w-full"
					href="/login/e-mail"
				>
					<MdEmail className="mr-2" />
					E-mail
				</Link>
			</div>
		</>
	);
};

export default Auth;
