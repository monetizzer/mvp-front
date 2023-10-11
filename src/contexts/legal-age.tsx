"use client";

import {
	ReactNode,
	createContext,
	useContext,
	useEffect,
	useState,
} from "react";

interface LegalAgeContextType {
	shouldDisplayModal: boolean;
	setShouldDisplayModal: (shouldDisplayModal: boolean) => void;
}

const LegalAgeContext = createContext<LegalAgeContextType>(
	{} as LegalAgeContextType,
);

export function LegalAgeProvider({
	children,
}: React.PropsWithChildren): ReactNode {
	const [shouldDisplayModal, setShouldDisplayModalState] =
		useState<boolean>(false);

	const setShouldDisplayModal = (shouldDisplayModal: boolean) => {
		localStorage.setItem("hide-legal-age-modal", "true");
		setShouldDisplayModalState(shouldDisplayModal);
	};

	useEffect(() => {
		if (!localStorage.getItem("hide-legal-age-modal")) {
			setShouldDisplayModalState(true);
		}
	}, []);

	return (
		<LegalAgeContext.Provider
			value={{
				shouldDisplayModal,
				setShouldDisplayModal,
			}}
		>
			{children}
		</LegalAgeContext.Provider>
	);
}

export function useLegalAgeContext() {
	return useContext(LegalAgeContext);
}
