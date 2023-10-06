import { BsDiscord } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

export default function Login() {
	return (
		<div className="flex items-center justify-center flex-col">
			<button
				type="button"
				title="Logar com discord"
				className="btn btn-primary rounded-xl w-full"
			>
				<BsDiscord className="mr-2" />
				Discord
			</button>
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
