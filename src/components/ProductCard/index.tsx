import { ProductMediasCount } from "components/ProductMediasCount";
import { ProductTypeBadge } from "components/ProductTypeBadge";
import Link from "next/link";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { Product } from "types/product";
import { formatMoney } from "utils/money";

interface Props {
	product: Product;
}

export const ProductCard = ({ product }: Props) => {
	return (
		<div className="flex flex-col gap-2">
			<div className="carousel rounded-md">
				{product.previewImagesUrls.map((url, idx) => (
					<Link
						key={url}
						className="carousel-item w-full"
						href={`/conteudo/${product.productId}`}
					>
						<img src={url} alt={product.name + idx} className="w-full" />
					</Link>
				))}
			</div>
			<div className="flex justify-between gap-2 w-full">
				<span className="font-bold col-span-3">{product.name}</span>
				<ProductTypeBadge type={product.type} />
			</div>
			<ProductMediasCount mediasCount={product.mediasCount} />
			<button className="btn btn-secondary">
				<PiShoppingCartSimpleFill />
				Comprar por {formatMoney(product.price)}
			</button>
			<span className="text-sm text-center">Acesso imediato!</span>
		</div>
	);
};
