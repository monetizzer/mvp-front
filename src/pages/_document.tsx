import { ColorModeScript } from "@chakra-ui/react";
import { SITE } from "configs/site";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { theme } from "theme";

export default class MyDocument extends Document {
	public render() {
		return (
			<Html lang="pt-br">
				<Head>
					<meta charSet="utf-8" />
					<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
					<meta name="application-name" content={SITE.name} />
					<meta name="description" content="Description" />
					<meta name="keywords" content="Keywords" />
					<meta name="apple-mobile-web-app-capable" content="yes" />
					<meta
						name="apple-mobile-web-app-status-bar-style"
						content="default"
					/>
					<meta name="apple-mobile-web-app-title" content={SITE.name} />
					<meta name="format-detection" content="telephone=no" />
					<meta name="mobile-web-app-capable" content="yes" />
					<meta name="theme-color" content="#0070F3" />

					<link rel="manifest" href="/manifest.json" />
					<link rel="shortcut icon" href="/favicon.ico" />
					<link
						href="/icons/favicon-16x16.png"
						rel="icon"
						type="image/png"
						sizes="16x16"
					/>
					<link
						href="/icons/favicon-32x32.png"
						rel="icon"
						type="image/png"
						sizes="32x32"
					/>
					<link rel="apple-touch-icon" href="/apple-icon.png" />
					<link
						href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
						rel="stylesheet"
					/>
				</Head>
				<body>
					<ColorModeScript initialColorMode={theme.config.initialColorMode} />
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
