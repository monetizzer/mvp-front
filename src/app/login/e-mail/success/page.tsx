"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

const Success = () => {
	const searchParams = useSearchParams();

	const email = searchParams.get("e-mail");

	return (
		<>
			<header className="card-body flex items-center justify-center w-full mb-8">
				<h2 className="card-title text-3xl text-center">
					E-mail enviado com sucesso.
				</h2>
			</header>
			<div className="flex items-center justify-center flex-col gap-6">
				<div className="text-center">
					<strong>Enviado para: </strong>
					<span>{email}</span>
					<p className="mt-10">Feche essa pagina e continue do seu e-mail.</p>
				</div>
				<div className="flex items-center justify-between xs:flex-row flex-col w-full">
					<button
						type="button"
						title="Enviar novamente"
						className="btn btn-link"
					>
						Enviar novamente
					</button>
					<Link
						href="/login/e-mail"
						title="Trocar e-mail"
						className="btn btn-link"
					>
						Trocar e-mail
					</Link>
				</div>
			</div>
		</>
	);
};

export default Success;
