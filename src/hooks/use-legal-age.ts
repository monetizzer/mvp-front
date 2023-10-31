"use client";

import { LegalAgeContext } from "contexts/legal-age";
import { useContext } from "react";

export const useLegalAge = () => {
	const context = useContext(LegalAgeContext);

	if (!context)
		throw new Error("useLegalAge must be used within a LegalAgeProvider");

	return context;
};
