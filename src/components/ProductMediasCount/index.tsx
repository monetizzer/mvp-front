import { BsCameraVideoFill, BsImageFill, BsVolumeUpFill } from "react-icons/bs";
import { Product } from "types/product";

interface Props {
	mediasCount: Product["mediasCount"] | undefined;
}

export const ProductMediasCount = ({ mediasCount }: Props) => {
	return (
		<div className="flex gap-2 w-full text-sm">
			{mediasCount?.VIDEO && (
				<div
					className="flex badge-video border tooltip rounded-lg"
					data-tip={`${mediasCount?.VIDEO} videos inclusos`}
				>
					<div className="h-full flex items-center rounded-tl-lg rounded-bl-lg px-2">
						<BsCameraVideoFill />
					</div>
					<div className="h-full font-bold flex items-center rounded-tr-lg rounded-br-lg px-2">
						{mediasCount?.VIDEO}
					</div>
				</div>
			)}

			{mediasCount?.IMAGE && (
				<div
					className="flex badge-image border tooltip rounded-lg"
					data-tip={`${mediasCount?.IMAGE} imagens inclusos`}
				>
					<div className="h-full flex items-center rounded-tl-lg rounded-bl-lg px-2">
						<BsImageFill />
					</div>
					<div className="h-full font-bold flex items-center rounded-tr-lg rounded-br-lg px-2">
						{mediasCount?.IMAGE}
					</div>
				</div>
			)}

			{mediasCount?.AUDIO && (
				<div
					className="flex badge-audio border tooltip rounded-lg"
					data-tip={`${mediasCount?.AUDIO} audios inclusos`}
				>
					<div className="h-full flex items-center rounded-tl-lg rounded-bl-lg px-2">
						<BsVolumeUpFill />
					</div>
					<div className="h-full font-bold flex items-center rounded-tr-lg rounded-br-lg px-2">
						{mediasCount?.AUDIO}
					</div>
				</div>
			)}
		</div>
	);
};
