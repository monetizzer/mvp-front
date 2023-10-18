import { LegalAgePopUp } from "components/LegalAgePopUp";
import { NavBar } from "components/NavBar";
import { PwaPopUp } from "components/PwaPopUp";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Head from "next/head";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import Providers from "utils/providers";
import { ReactNode } from "react";
import { Footer } from "components/Footer";

interface Props {
	children: ReactNode;
}

const roboto = Roboto({
	weight: ["100", "300", "400", "500", "700", "900"],
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Las Musas",
	description: "Melhor site para gerenciar fotos da sua coleção",
};

const RootLayout: FC<Props> = ({ children }) => {
	return (
		<html lang="pt-br" data-theme="lasmusas">
			<Head>
				<link rel="manifest" href="/manifest.json" />
				<link rel="apple-touch-icon" href="/icon-192x192.png" />
				<meta name="theme-color" content="#803b7e" />
			</Head>
			<body className={roboto.className}>
				<div className="relative">
					<Providers>
						<LegalAgePopUp />
						<PwaPopUp />
						{children}

						<Footer />
						<NavBar />
					</Providers>
				</div>
			</body>
		</html>
	);
};

export default RootLayout;
