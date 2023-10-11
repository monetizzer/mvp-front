"use client";

import { usePwaContext } from "contexts/pwa-popup";
import { FaDownload } from "react-icons/fa";

export const PwaPopUp = () => {
	const { hasInstalledPwa, hidePwaPopUp, pwaPrompt, setHidePwaPopUp } =
		usePwaContext();

	return (
		!hasInstalledPwa &&
		!hidePwaPopUp &&
		pwaPrompt && (
			<div className="fixed top-0 z-50 p-2 sm:p-3 w-full">
				<div className="alert shadow-lg max-w-screen-xl mx-auto px-2 sm:px-4">
					<FaDownload />
					<div>
						<h3 className="font-bold">Instale nosso app gratuito!</h3>
						<div className="text-xs">
							Ele não ocupa espaço no seu celular ❤️
						</div>
					</div>
					<div>
						<button
							className="btn btn-sm btn-ghost mr-1"
							onClick={() => setHidePwaPopUp(true)}
						>
							Talvez depois
						</button>
						<button
							className="btn btn-sm btn-primary"
							onClick={() => pwaPrompt.prompt()}
						>
							Instalar
						</button>
					</div>
				</div>
			</div>
		)
	);
};
