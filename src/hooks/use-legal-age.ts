"use client";

import { useContext } from "react";

import { LegalAgeContext } from "contexts/legal-age";

export const useLegalAge = () => {
	const context = useContext(LegalAgeContext);

	if (!context)
		throw new Error("useLegalAge must be used within a LegalAgeProvider");

	return context;
};
