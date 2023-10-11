"use client";

import {
	ReactNode,
	createContext,
	useContext,
	useEffect,
	useState,
} from "react";

interface PwaContextType {
	pwaPrompt?: BeforeInstallPromptEvent;
	hasInstalledPwa: boolean;
	hidePwaPopUp: boolean;
	setHidePwaPopUp: (hidePwaPopUp: boolean) => void;
	setHasInstalledPwa: (hasInstalledPwa: boolean) => void;
}

const PwaContext = createContext<PwaContextType>({} as PwaContextType);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function PwaProvider({ children }: any): ReactNode {
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
}

export function usePwaContext() {
	return useContext(PwaContext);
}
