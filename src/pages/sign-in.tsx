import { SignIn } from "components/pages/SignIn";
import { i18n } from "configs/i18n";
import type { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default SignIn;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale || i18n.defaultLocale, [
				"sign-in",
			])),
		},
	};
};
