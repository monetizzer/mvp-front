import { SITE } from "configs/site";
import NextHead from "next/head";

export const Head: FC = () => (
	<NextHead>
		<meta
			name="viewport"
			content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
		/>
		<title>{SITE.name}</title>
	</NextHead>
);
