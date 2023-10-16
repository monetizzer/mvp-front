"use client";

import { useAuth } from "hooks/useAuth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { DocumentStatusEnum } from "types/enums/document-status";

const renderValidationDocument = (status: DocumentStatusEnum) => {
	if (status.endsWith("R")) {
		// TODO Exibir o motivo de reprovacao e um botao para enviar novamente
		return <span>Documentos reprovados</span>;
	}

	return <span>Documentos em validação</span>;
};

const Account = () => {
	const router = useRouter();

	const { user, logout } = useAuth();

	return (
		<main className="min-h-[100dvh] w-full container-padding">
			<section className="max-w-7xl container-padding w-full flex flex-col items-center justify-center gap-4">
				<div>
					<b>ID: </b>
					<span>{user?.accountId}</span>
				</div>
				<div>
					<b>Username: </b>
					<span>{user?.username}</span>
				</div>
			</section>

			<div className="divider" />

			<section className="max-w-7xl container-padding w-full flex flex-col items-center justify-center gap-4">
				{user?.dvs === DocumentStatusEnum.AA && (
					<Link
						className="w-full text-primary-content btn btn-secondary"
						href="/criar-loja"
					>
						Seja uma modelo
					</Link>
				)}
				{user?.dvs === DocumentStatusEnum["00"] && (
					<>
						<label
							htmlFor="be-a-model-modal"
							className="w-full text-primary-content btn btn-secondary modal-button"
						>
							Seja uma modelo
						</label>
						<input
							type="checkbox"
							id="be-a-model-modal"
							className="modal-toggle"
						/>
						<div className="modal">
							<div className="modal-box">
								<p>
									Para ser uma modelo em nossa plataforma, é necessário enviar
									seus documentos para garantir que você é maior de idade e dona
									do conteúdo sendo vendido. Você está de acordo com isso?
								</p>
								<div className="modal-action">
									<label htmlFor="be-a-model-modal" className="btn">
										Não, talvez depois
									</label>
									<label
										htmlFor="be-a-model-modal"
										className="btn btn-primary"
										onClick={() => router.push("/documentos")}
									>
										Sim, continuar
									</label>
								</div>
							</div>
						</div>
					</>
				)}
				{user?.dvs &&
					![DocumentStatusEnum.AA, DocumentStatusEnum["00"]].includes(
						user?.dvs,
					) &&
					renderValidationDocument(user.dvs)}
			</section>

			<div className="divider" />

			<section className="max-w-7xl container-padding w-full flex flex-col items-center justify-center gap-4">
				<button className="w-full btn btn-error" onClick={() => logout()}>
					Sair
				</button>
			</section>
		</main>
	);
};

export default Account;
