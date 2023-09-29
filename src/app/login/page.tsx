import { BsDiscord } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

export default function Login() {
	return (
		<main className="min-h-[100dvh] w-full flex justify-center">
			<section className="max-w-7xl container-padding w-full flex items-center justify-center">
				<div className="xs:card flex-shrink-0 w-full max-w-sm xs:shadow-md xs:bg-base-100">
					<div className="card-body">
						<h2 className="card-title">Entrar ou criar conta</h2>

						<div className="flex items-center justify-center flex-col mt-8">
							<button type="button" title='Logar com discord' className="btn btn-primary rounded-xl w-full">
								<BsDiscord className="mr-2" />

								Discord
							</button>
							<div className="divider">OU</div>
							<button type="button" title='Logar com email' className="btn btn-secondary rounded-xl w-full">
								<MdEmail className="mr-2" />

								E-mail
							</button>
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}