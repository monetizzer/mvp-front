"use client";

import { useLegalAge } from "hooks/use-legal-age";

export const LegalAgePopUp = () => {
	const { shouldDisplayModal, setShouldDisplayModal } = useLegalAge();

	return (
		shouldDisplayModal && (
			<dialog className="modal modal-open">
				<div className="modal-box">
					<h3 className="font-bold text-lg">Olá!</h3>
					<p className="py-4">
						Para acessar esse site você precisa ter mais de 18 anos
					</p>
					<div className="modal-action">
						<form method="dialog" className="grid grid-cols-2">
							<button
								className="btn mr-4"
								onClick={() => window.location.replace("https://google.com")}
							>
								Sou menor de idade
							</button>
							<button
								className="btn btn-secondary"
								onClick={() => setShouldDisplayModal(false)}
							>
								Tenho mais de 18 anos
							</button>
						</form>
					</div>
				</div>
			</dialog>
		)
	);
};
