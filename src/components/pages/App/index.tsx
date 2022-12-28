import { ChakraProvider } from "@chakra-ui/react";
import { LayoutWrapper } from "layouts/wrapper";
import type { AppProps } from "next/app";
import { theme } from "theme";

import { Head } from "./components/Head";

export const App: FC<AppProps> = ({ Component, pageProps }: AppProps) => (
	<>
		<Head />
		<ChakraProvider theme={theme}>
			<LayoutWrapper>
				<Component {...pageProps} />
			</LayoutWrapper>
		</ChakraProvider>
	</>
);
