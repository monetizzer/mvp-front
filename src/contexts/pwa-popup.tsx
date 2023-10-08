"use client";

import { ReactNode, createContext, useEffect, useState } from "react";

interface PwaContextType {
	pwaPrompt?: BeforeInstallPromptEvent;
	hasInstalledPwa: boolean;
	hidePwaPopUp: boolean;
	setHidePwaPopUp: (hidePwaPopUp: boolean) => void;
	setHasInstalledPwa: (hasInstalledPwa: boolean) => void;
}

interface Props {
	children: ReactNode;
}

export const PwaContext = createContext<PwaContextType>({} as PwaContextType);

export const PwaProvider: FC<Props> = ({ children }) => {
	const [pwaPrompt, setPwaPrompt] = useState<
		BeforeInstallPromptEvent | undefined
	>();
	const [hidePwaPopUp, setHidePopUpState] = useState<boolean>(false);
	const [hasInstalledPwa, setHasInstalledPwa] = useState<boolean>(true);

	const setHidePwaPopUp = (hidePwaPopUp: boolean) => {
		sessionStorage.setItem("hide-pwa-popup", "true");
		setHidePopUpState(hidePwaPopUp);
	};

	useEffect(() => {
		const handleBeforeInstallPrompt = (e: Event) => {
			e.preventDefault();
			setPwaPrompt(e as BeforeInstallPromptEvent);
		};

		window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

		if (sessionStorage.getItem("hide-pwa-popup")) {
			setHidePopUpState(true);
		}

		return () => {
			window.removeEventListener(
				"beforeinstallprompt",
				handleBeforeInstallPrompt,
			);
		};
	}, []);

	useEffect(() => {
		if (!window.matchMedia("(display-mode: standalone)").matches) {
			setHasInstalledPwa(false);
		}
	}, []);

	return (
		<PwaContext.Provider
			value={{
				pwaPrompt,
				hasInstalledPwa,
				hidePwaPopUp,
				setHidePwaPopUp,
				setHasInstalledPwa,
			}}
		>
			{children}
		</PwaContext.Provider>
	);
};
