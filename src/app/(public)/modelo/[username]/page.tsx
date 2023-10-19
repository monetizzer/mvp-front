/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { products, store } from "assets/data";
import { ProductCard } from "components/ProductCard";
import Link from "next/link";
import { BsPencilFill } from "react-icons/bs";
import { IoMdArrowRoundBack } from "react-icons/io";
import { MdVerified } from "react-icons/md";

const Model = () => {
	return (
		<main className="min-h-[100dvh] w-full">
			<section className="relative flex justify-center mb-8">
				<div className="absolute top-0 flex justify-between gap-4 w-full container-padding">
					<Link className="btn btn-circle btn-primary" href="/">
						<IoMdArrowRoundBack />
					</Link>
					<button className="btn btn-circle btn-primary">
						<BsPencilFill />
					</button>
				</div>
				<img
					src={store.bannerUrl}
					alt="banner"
					className="w-full min-w-full max-w-full h-64 min-h-64 max-h-64 "
				/>
				<img
					src={store.avatarUrl}
					alt="avatar"
					className="absolute -bottom-8 w-40 min-w-40 max-w-40 h-40 min-h-40 max-h-40 rounded-full shadow-xl"
				/>
			</section>

			<section className="flex flex-col justify-center align-center text-center container-padding">
				<h1 className="font-bold text-2xl flex justify-center">
					{store.name} <MdVerified className="text-blue-500 mt-1" />
				</h1>
				<span className="mb-4">@{store.username}</span>
				<p className="text-sm whitespace-pre-line">{store.description}</p>
			</section>

			<section className="container-padding flex flex-col gap-4">
				{products.map((p) => {
					return <ProductCard key={p.productId} product={p} />;
				})}
			</section>
		</main>
	);
};

export function generateStaticParams() {
	return [store];
}

export default Model;
