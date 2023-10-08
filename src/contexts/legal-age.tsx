"use client";

import { ReactNode, createContext, useEffect, useState } from "react";

interface LegalAgeContextType {
	shouldDisplayModal: boolean;
	setShouldDisplayModal: (shouldDisplayModal: boolean) => void;
}

interface Props {
	children: ReactNode;
}

export const LegalAgeContext = createContext<LegalAgeContextType>(
	{} as LegalAgeContextType,
);

export const LegalAgeProvider: FC<Props> = ({ children }) => {
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
};
