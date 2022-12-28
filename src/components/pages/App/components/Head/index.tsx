import { SITE } from "configs/site";
import NextHead from "next/head";

export const Head: FC = () => (
	<NextHead>
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>{SITE.name}</title>
	</NextHead>
);
