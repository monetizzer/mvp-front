import type { ImageProps, ImageLoader } from "next/image";
import ImageNext from "next/image";

const DEFAULT_QUALITY = 75;

const loader: ImageLoader = ({ src, width, quality }) => {
	return `${src}?w=${width}&q=${quality || DEFAULT_QUALITY}`;
};

export const Image: FC<ImageProps> = props => (
	<ImageNext loader={loader} {...props} />
);
