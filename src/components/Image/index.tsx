import type { ImageProps } from "next/image";
import ImageNext from "next/image";

export const Image: FC<ImageProps> = props => <ImageNext {...props} />;
