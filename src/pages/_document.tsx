import { ColorModeScript } from "@chakra-ui/react";
import enUSSystem from "assets/translations/en-US/common.json";
import ptBRSystem from "assets/translations/pt-BR/common.json";
import { i18n } from "configs/i18n";
import { SITE } from "configs/site";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { theme } from "theme";
import type { GetSystemInformationResult } from "types/interfaces/system";

const getSystemInformation = (locale: string): GetSystemInformationResult => {
	switch (locale) {
		case "pt-BR":
			return ptBRSystem as GetSystemInformationResult;
		case "en-US":
		default:
			return enUSSystem as GetSystemInformationResult;
	}
};

export default class MyDocument extends Document {
	public render() {
		const { locale } = this.props.__NEXT_DATA__;
		const { system } = getSystemInformation(locale || i18n.defaultLocale);

		return (
			<Html lang={system.lang}>
				<Head>
					<meta charSet="utf-8" />
					<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
					<meta name="application-name" content={SITE.name} />
					<meta name="apple-mobile-web-app-capable" content="yes" />
					<meta
						name="apple-mobile-web-app-status-bar-style"
						content="default"
					/>
					<meta name="apple-mobile-web-app-title" content={SITE.name} />
					<meta name="description" content="Description" />
					<meta name="keywords" content="Keywords" />
					<meta name="format-detection" content="telephone=no" />
					<meta name="mobile-web-app-capable" content="yes" />
					<meta name="msapplication-TileColor" content="#000000" />
					<meta name="msapplication-tap-highlight" content="no" />
					<meta name="theme-color" content="#0070F3" />

					<link rel="manifest" href="/manifest.json" />
					<link rel="shortcut icon" href="/favicon.ico" />
					<link rel="apple-touch-icon" href="/apple-icon.png" />
					<link rel="cannonical" href={SITE.url} />
					<link
						href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;700&display=swap"
						rel="stylesheet"
					/>

					<meta property="og:type" content="website" />
					<meta property="og:title" content={SITE.name} />
					<meta property="og:description" content="Description" />
					<meta property="og:site_name" content={SITE.name} />
					<meta property="og:url" content={SITE.url} />
					<meta name="og:locale" content={system.ogLocale} />
					<meta
						property="og:image"
						content={`${SITE.url}/icons/apple-touch-icon.png`}
					/>
				</Head>
				<body>
					<ColorModeScript
						type="cookie"
						initialColorMode={theme.config.initialColorMode}
					/>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
