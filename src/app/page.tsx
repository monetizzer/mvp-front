import Link from "next/link";

const Home = () => {
	return (
		<main className="min-h-[100dvh] w-full flex justify-center">
			<section className="max-w-7xl container-padding w-full flex items-center justify-center">
				<Link className="text-white btn btn-secondary rounded-xl" href="/login">
					Entrar ou criar conta
				</Link>
			</section>
		</main>
	);
};

export default Home;
