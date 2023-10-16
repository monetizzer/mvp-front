/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { BsPencilFill } from "react-icons/bs";
import { IoMdArrowRoundBack } from "react-icons/io";
import { MdVerified } from "react-icons/md";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { DeliveryMethodEnum } from "types/enums/delivery-method";
import { ProductStatusEnum } from "types/enums/product-status";
import { ProductTypeEnum } from "types/enums/product-type";
import { Product } from "types/product";
import { Store } from "types/store";
import { formatMoney } from "utils/money";

const store: Store = {
	storeId: "foo",
	accountId: "foo",
	username: "foobar",
	name: "Mika Almeida",
	description:
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
	bannerUrl: "https://images2.alphacoders.com/552/552709.jpg",
	avatarUrl:
		"https://faradayshielding.com.au/wp-content/uploads/2021/05/Image_039.jpg",
	createdAt: new Date(),
};

const products: Array<Product> = [
	{
		productId: "foo",
		storeId: store.storeId,
		type: ProductTypeEnum.PACK,
		status: ProductStatusEnum.APPROVED,
		name: "Brincando com os peitos",
		description: "",
		price: 2500,
		previewImagesUrls: [
			"https://images3.alphacoders.com/165/thumb-1920-165265.jpg",
			"https://pixy.org/src/487/4870083.jpg",
			"https://www.imagelighteditor.com/img/bg-after.jpg",
		],
		deliveryMethod: DeliveryMethodEnum.AUTOMATIC_OUR_PLATFORM,
		createdAt: new Date(),
	},
	{
		productId: "bar",
		storeId: store.storeId,
		type: ProductTypeEnum.AUDIO,
		status: ProductStatusEnum.APPROVED,
		name: "Masturbação com vibrador",
		description: "",
		price: 5000,
		previewImagesUrls: ["https://pixy.org/src/487/4870083.jpg"],
		deliveryMethod: DeliveryMethodEnum.AUTOMATIC_OUR_PLATFORM,
		createdAt: new Date(),
	},
	{
		productId: "bar1",
		storeId: store.storeId,
		type: ProductTypeEnum.VIDEO,
		status: ProductStatusEnum.APPROVED,
		name: "2 vídeos curtos de exibindo a PPK 2 vídeos curtos de exibindo a PPK",
		description: "",
		price: 2500,
		previewImagesUrls: [
			"https://www.wallpapers13.com/wp-content/uploads/2016/01/Autumn-forest-waterfall-nature-aiyumn-HD-background-2560x1600-840x525.jpg",
		],
		deliveryMethod: DeliveryMethodEnum.AUTOMATIC_OUR_PLATFORM,
		createdAt: new Date(),
	},
	{
		productId: "bar1",
		storeId: store.storeId,
		type: ProductTypeEnum.IMAGE,
		status: ProductStatusEnum.APPROVED,
		name: "55 fotos explicitas - Nudez total",
		description: "",
		price: 6250,
		previewImagesUrls: [
			"https://www.imagelighteditor.com/img/bg-after.jpg",
			"https://www.wallpapers13.com/wp-content/uploads/2016/01/Autumn-forest-waterfall-nature-aiyumn-HD-background-2560x1600-840x525.jpg",
		],
		deliveryMethod: DeliveryMethodEnum.AUTOMATIC_OUR_PLATFORM,
		createdAt: new Date(),
	},
];

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
					<button className="btn btn-circle btn-primary">
						<IoMdArrowRoundBack />
					</button>
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
				<p className="text-sm">{store.description}</p>
			</section>

			<section className="container-padding flex flex-col gap-4">
				{products.map((p) => {
					return (
						<div key={p.productId} className="flex flex-col gap-2">
							<div className="carousel rounded-md">
								{p.previewImagesUrls.map((url, idx) => (
									<div key={url} className="carousel-item w-full">
										<img src={url} alt={p.name + idx} className="w-full" />
									</div>
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
