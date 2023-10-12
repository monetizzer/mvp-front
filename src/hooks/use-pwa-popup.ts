"use client";

import { useContext } from "react";

import { PwaContext } from "contexts/pwa-popup";

export const usePwaPopUp = () => {
	const context = useContext(PwaContext);

	if (!context)
		throw new Error("usePwaPopUp must be used within a PwaProvider");

	return context;
};
