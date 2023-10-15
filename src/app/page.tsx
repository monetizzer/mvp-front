"use client";

import { useAuth } from "hooks/useAuth";
import Link from "next/link";

const Home = () => {
	const { user, logout } = useAuth();

	return (
		<main className="min-h-[100dvh] w-full flex justify-center">
			<section className="max-w-7xl container-padding w-full flex flex-col items-center justify-center gap-4">
				<Link className="w-full text-white btn btn-secondary" href="/login">
					Entrar ou criar conta
				</Link>
				<Link
					className="w-full text-white btn btn-secondary"
					href="/documentos"
				>
					Enviar documentos
				</Link>
				<Link
					className="w-full text-white btn btn-secondary"
					href="/criar-loja"
				>
					Criar loja
				</Link>
				{user && (
					<button className="w-full btn btn-error" onClick={() => logout()}>
						Logout
					</button>
				)}
			</section>
		</main>
	);
};

export default Home;
