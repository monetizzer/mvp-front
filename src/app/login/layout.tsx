import { ReactNode } from "react";

interface Props {
	children: ReactNode;
}

const LoginLayout: FC<Props> = ({ children }) => {
	return (
		<main className="flex justify-center w-full min-h-[100dvh]">
			<section className="flex items-center justify-center w-full max-w-7xl container-padding">
				<div className="card w-full max-w-md flex-shrink-0 xs:bg-base-200 xs:shadow-md container-padding">
					<header className="card-body flex items-center justify-center w-full mb-8">
						<h2 className="card-title text-3xl text-center">
							Entrar ou cria conta
						</h2>
					</header>
					{children}
				</div>
			</section>
		</main>
	);
};

export default LoginLayout;
