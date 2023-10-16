import { ProductTypeEnum } from "types/enums/product-type";

interface Input {
	type: ProductTypeEnum;
}

export const ProductTypeBadge = ({ type }: Input) => {
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
