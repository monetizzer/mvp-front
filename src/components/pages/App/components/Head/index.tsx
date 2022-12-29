import { SITE } from "configs/site";
import NextHead from "next/head";

export const Head: FC = () => (
	<NextHead>
		<meta
			name="viewport"
			content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
		/>
		<title>{SITE.name}</title>
	</NextHead>
);
