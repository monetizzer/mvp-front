/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { products, store } from "assets/data";
import Link from "next/link";
import { BsPencilFill } from "react-icons/bs";
import { IoMdArrowRoundBack } from "react-icons/io";
import { MdVerified } from "react-icons/md";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { ProductTypeEnum } from "types/enums/product-type";
import { formatMoney } from "utils/money";

const getProductTypeBadge = (type: ProductTypeEnum) => {
	switch (type) {
		case ProductTypeEnum.PACK:
		default: {
			return <span className="font-bold badge badge-neutral">PACK</span>;
		}
		case ProductTypeEnum.VIDEO:
		case ProductTypeEnum.CUSTOM_VIDEO: {
			return <span className="font-bold badge badge-warning">VÍDEO</span>;
		}
		case ProductTypeEnum.AUDIO:
		case ProductTypeEnum.CUSTOM_AUDIO: {
			return <span className="font-bold badge badge-error">AUDIO</span>;
		}
		case ProductTypeEnum.IMAGE:
		case ProductTypeEnum.CUSTOM_IMAGE: {
			return <span className="font-bold badge badge-info">IMAGEM</span>;
		}
	}
};

const Model = ({ params }: any) => {
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
								{getProductTypeBadge(p.type)}
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
		</main>
	);
};

export function generateStaticParams() {
	return [store];
}

export default Model;
