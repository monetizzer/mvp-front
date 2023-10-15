import Link from "next/link";

const Home = () => {
	return (
		<main className="min-h-[100dvh] w-full flex justify-center">
			<section className="max-w-7xl container-padding w-full flex flex-col items-center justify-center gap-4">
				<Link
					className="w-full text-white btn btn-secondary rounded-xl"
					href="/login"
				>
					Entrar ou criar conta
				</Link>
				<Link
					className="w-full text-white btn btn-secondary rounded-xl"
					href="/documentos"
				>
					Enviar documentos
				</Link>
				<Link
					className="w-full text-white btn btn-secondary rounded-xl"
					href="/criar-loja"
				>
					Criar loja
				</Link>
			</section>
		</main>
	);
};

export default Home;
