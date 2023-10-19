/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import { ProductMediasCount } from "components/ProductMediasCount";
import { ProductTypeBadge } from "components/ProductTypeBadge";
import Link from "next/link";
import { Product } from "types/product";

interface Props {
	title: string;
	products: Array<Product>;
}

export const ProductsCarousel = ({ title, products }: Props) => {
	return (
		<section className="container-padding">
			<h2 className="text-xl font-bold pb-2">{title}</h2>

			<div className="max-w-full space-x-4 carousel carousel-center">
				{products.map((p) => (
					<Link
						key={p.productId}
						className="carousel-item max-w-64 w-64 card bg-white"
						href={`/conteudo/${p.productId}`}
					>
						<div className="flex flex-col">
							<div className="carousel rounded-md">
								{p.previewImagesUrls.map((url, idx) => (
									<img
										key={url}
										src={url}
										alt={p.name + idx}
										className="carousel-item w-full flex justify-center max-w-64 max-h-32"
									/>
								))}
							</div>
							<div className="container-padding flex flex-col items-center ">
								<div className="flex justify-between gap-2 w-full">
									<span className="font-bold col-span-3">{p.name}</span>
									<ProductTypeBadge type={p.type} />
								</div>
								<ProductMediasCount mediasCount={p.mediasCount} />
							</div>
						</div>
					</Link>
				))}
			</div>
		</section>
	);
};
