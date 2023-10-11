"use client";

import React from "react";

import { PwaProvider } from "./pwa-popup";
import { ReactQueryContext } from "./react-query";

export const Providers = ({ children }: React.PropsWithChildren) => {
	return (
		<>
			<ReactQueryContext>
				<PwaProvider>{children}</PwaProvider>
			</ReactQueryContext>
		</>
	);
};
