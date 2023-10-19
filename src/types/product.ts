import { DeliveryMethodEnum } from "./enums/delivery-method";
import { MediaTypeEnum } from "./enums/media-type";
import { ProductStatusEnum } from "./enums/product-status";
import { ProductTypeEnum } from "./enums/product-type";

export type ProductMediasCount = Partial<Record<MediaTypeEnum, number>>;

export interface Product {
	productId: string;
	storeId: string;
	type: ProductTypeEnum;
	status: ProductStatusEnum;
	name: string;
	description: string;
	color?: string;
	price: number; // Int, multiplied by 100 ($1 = 100, $0.30 = 30)
	previewImagesUrls: Array<string>;
	deliveryMethod: DeliveryMethodEnum;
	mediasCount?: ProductMediasCount;
	createdAt: Date;
}
