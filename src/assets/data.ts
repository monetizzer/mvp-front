import { DeliveryMethodEnum } from "types/enums/delivery-method";
import { ProductStatusEnum } from "types/enums/product-status";
import { ProductTypeEnum } from "types/enums/product-type";
import { Product } from "types/product";
import { Store } from "types/store";

export const store: Store = {
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

export const products: Array<Product> = [
	{
		productId: "foo",
		storeId: store.storeId,
		type: ProductTypeEnum.PACK,
		status: ProductStatusEnum.APPROVED,
		name: "Brincando com os peitos",
		description: `4 minutinhos aonde eu brinco com a minha várinha mágica, gozo gostoso fazendo caras e bocas e até molho a cama 😈😝😏

***Conteúdo com rosto
***Conteúdo explícito`,
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
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non odio euismod lacinia at quis risus.",
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
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
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
