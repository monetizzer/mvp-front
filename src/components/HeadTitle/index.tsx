import { SITE } from "configs/site";
import Head from "next/head";

interface Props {
	title: string;
}

export const HeadTitle: FC<Props> = ({ title }) => (
	<Head>
		<title>
			{title} | {SITE.name}
		</title>
	</Head>
);
