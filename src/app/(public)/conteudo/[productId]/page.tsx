/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { products, store } from "assets/data";
import { ProductTypeBadge } from "components/ProductTypeBadge";
import Link from "next/link";
import { BsPencilFill } from "react-icons/bs";
import { IoMdArrowRoundBack } from "react-icons/io";
import { MdVerified } from "react-icons/md";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { formatMoney } from "utils/money";

const Content = ({ params }: any) => {
	const product = products.find((p) => p.productId === params.productId)!;

	return (
		<main className="min-h-[100dvh] w-full">
			<section className="relative ">
				<div className="absolute top-0 flex justify-between gap-4 w-full container-padding">
					<Link
						className="btn btn-circle btn-primary"
						href={`/modelo/${store.username}`}
					>
						<IoMdArrowRoundBack />
					</Link>
					<button className="btn btn-circle btn-primary">
						<BsPencilFill />
					</button>
				</div>
				<div className="carousel">
					{product.previewImagesUrls.map((url, idx) => (
						<div key={url} className="carousel-item w-full">
							<img src={url} alt={product.name + idx} className="w-full" />
						</div>
					))}
				</div>
			</section>
			<section className="container-padding flex flex-col gap-2">
				<div className="flex justify-between">
					<h1 className="text-2xl font-bold col-span-3">{product.name}</h1>
					<ProductTypeBadge type={product.type} />
				</div>
				<p className="text-sm text-center mb-2 whitespace-pre-line">
					{product.description}
				</p>
				<button className="btn btn-secondary">
					<PiShoppingCartSimpleFill />
					Comprar por {formatMoney(product.price)}
				</button>
				<span className="text-sm text-center">Acesso imediato!</span>
			</section>

			<section className="container-padding">
				<h2 className="text-xl font-bold mb-4">Modelo</h2>

				<Link
					className="w-full btn h-20 min-h-20 max-h-20"
					href={`/modelo/${store.username}`}
				>
					<img
						src={store.avatarUrl}
						alt="avatar"
						className="w-16 min-w-16 max-w-16 h-16 min-h-16 max-h-16 rounded-full"
					/>
					<div className="ml-2 pt-1">
						<span className="font-bold text-lg flex justify-center">
							{store.name} <MdVerified className="text-blue-500 mt-1" />
						</span>
						<span className="text-sm">@{store.username}</span>
					</div>
				</Link>
			</section>

			<section className="container-padding">
				<h2 className="text-xl font-bold mb-4">Mais conteúdos da modelo</h2>

				<section className="flex flex-col gap-4">
					{products.map((p) => {
						return (
							<div key={p.productId} className="flex flex-col gap-2">
								<div className="carousel rounded-md">
									{p.previewImagesUrls.map((url, idx) => (
										<Link
											key={url}
											className="carousel-item w-full"
											href={`/conteudo/${p.productId}`}
										>
											<img src={url} alt={p.name + idx} className="w-full" />
										</Link>
									))}
								</div>
								<div className="flex justify-between gap-2 w-full">
									<span className="font-bold col-span-3">{p.name}</span>
									<ProductTypeBadge type={p.type} />
								</div>
								<button className="btn btn-secondary">
									<PiShoppingCartSimpleFill />
									Comprar por {formatMoney(p.price)}
								</button>
								<span className="text-sm text-center">Acesso imediato!</span>
							</div>
						);
					})}
				</section>
			</section>
		</main>
	);
};

export function generateStaticParams() {
	return products;
}

export default Content;
