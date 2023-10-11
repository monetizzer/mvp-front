"use client";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";
import { ToastContainer } from "react-toastify";

export const ReactQueryContext = ({ children }: React.PropsWithChildren) => {
	const [client] = React.useState(
		new QueryClient({
			defaultOptions: {
				queries: {
					staleTime: 100 * 60 * 60 * 4, // 4 hours
					refetchOnWindowFocus: false,
					refetchOnReconnect: false,
					refetchOnMount: false,
				},
			},
		}),
	);

	return (
		<QueryClientProvider client={client}>
			{children}
			<ReactQueryDevtools initialIsOpen={false} />
			<ToastContainer />
		</QueryClientProvider>
	);
};
