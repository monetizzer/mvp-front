"use client";

import React from "react";

import { LegalAgeProvider } from "./legal-age";
import { PwaProvider } from "./pwa-popup";
import { ReactQueryContext } from "./react-query";

export const Providers = ({ children }: React.PropsWithChildren) => {
	return (
		<>
			<ReactQueryContext>
				<LegalAgeProvider>
					<PwaProvider>
						<>{children}</>
					</PwaProvider>
				</LegalAgeProvider>
			</ReactQueryContext>
		</>
	);
};
