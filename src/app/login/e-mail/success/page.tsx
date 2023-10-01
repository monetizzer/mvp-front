"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

const Success = () => {
	const searchParams = useSearchParams();

	const email = searchParams.get("e-mail");

	return (
		<div className="flex items-center justify-center flex-col gap-6">
			<div className="text-center">
				<h3 className="text-xl">E-mail enviado com sucesso.</h3>
				<span>{email}</span>
			</div>
			<div className="flex items-center justify-between xs:flex-row flex-col w-full">
				<button type="button" title="Enviar novamente" className="btn btn-link">
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
	);
};

export default Success;
