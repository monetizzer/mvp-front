"use client";

import { PwaContext } from "contexts/pwa-popup";
import { useContext } from "react";

export const usePwaPopUp = () => {
	const context = useContext(PwaContext);

	if (!context)
		throw new Error("usePwaPopUp must be used within a PwaProvider");

	return context;
};
