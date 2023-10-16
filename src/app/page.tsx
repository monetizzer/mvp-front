import Link from "next/link";

const Home = () => {
	return (
		<main className="min-h-[100dvh] w-full flex justify-center">
			<section className="max-w-7xl container-padding w-full flex flex-col items-center justify-center gap-4">
				<Link className="w-full text-white btn btn-secondary" href="/login">
					Entrar ou criar conta
				</Link>
				<Link
					className="w-full text-white btn btn-primary"
					href="/modelo/foobar"
				>
					Ver loja
				</Link>
				<Link className="w-full text-white btn btn-primary" href="/carrinho">
					Carrinho
				</Link>
			</section>
		</main>
	);
};

export default Home;
