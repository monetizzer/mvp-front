import { useTranslation } from "next-i18next";
import type { FCWithLayout } from "types/interfaces/layout";

export const Home: FCWithLayout = () => {
	const { t } = useTranslation("home");

	return <>{t("message")}</>;
};
