export interface ProductProps {
	color: {
		label: string,
    value: string,
    emoji: string,
	}
	type: unknown;
	deliveryMethod: unknown;
	name: string;
	description: string;
	price: string;
	productImage: string;
}