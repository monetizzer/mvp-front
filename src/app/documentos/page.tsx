"use client";

import { Input } from "components/Input";
import { useState } from "react";
import { useForm, useFormState } from "react-hook-form";

interface IForm {
	documentType: string;
	documentNumber: string;
	name: string;
	phone: string;

	line1: string;
	line2: string;
	postalCode: string;
	city: string;
	state: string;

	documentPicture: string;
	selfieWithDocument: string;
}

export default function Documents() {
	const { handleSubmit, register, control } = useForm<IForm>({
		mode: "onChange",
		defaultValues: {
			documentType: "BR_CPF",
			documentNumber: "",
			name: "",
			phone: "",

			line1: "",
			line2: "",
			postalCode: "",
			city: "",
			state: "",

			documentPicture: "",
			selfieWithDocument: "",
		},
	});
	const { isValid, isSubmitting } = useFormState({ control });

	const [stage, setStage] = useState<"1" | "2" | "3">("1");

	const onSubmit = (values: IForm) => {
		if (isValid) {
			console.log(values);

			return;
		}
	};

	return (
		<main className="flex justify-center w-full min-h-[100dvh]">
			<section className="flex items-center justify-center w-full max-w-7xl container-padding">
				<div className="card w-full max-w-md flex-shrink-0 xs:bg-base-200 xs:shadow-md container-padding">
					<header className="card-body flex items-center justify-center w-full">
						<h2 className="card-title text-3xl text-center">
							Enviar documentos
						</h2>
					</header>
					<form
						className="flex items-center justify-center flex-col gap-6"
						onSubmit={handleSubmit(onSubmit)}
					>
						{stage === "1" && (
							<div className="form-control w-full max-w-xs">
								<label className="label font-bold" htmlFor="documentType">
									Tipo de documento
								</label>
								<select
									className="select select-bordered"
									id="documentType"
									{...register("documentType", {
										required: true,
									})}
								>
									<option value="BR_RG">CPF</option>
									<option value="BR_CNH">CNH</option>
									<option value="PASSPORT">Passaporte</option>
								</select>

								<Input
									id="documentNumber"
									type="text"
									labelMessage="Nro do Documento"
									isFullWidth
									{...register("documentNumber", {
										required: true,
									})}
								/>

								<Input
									id="name"
									type="text"
									labelMessage="Nome Completo"
									isFullWidth
									{...register("name", {
										required: true,
									})}
								/>

								<Input
									id="phone"
									type="text"
									labelMessage="Nro de Telefone"
									isFullWidth
									{...register("phone", {
										required: true,
									})}
								/>

								<button
									title="Continuar"
									className="btn btn-secondary w-full rounded-xl mt-4"
									onClick={() => setStage("2")}
								>
									Continuar
								</button>
							</div>
						)}
						{stage === "2" && (
							<div className="form-control w-full max-w-xs">
								<Input
									id="line1"
									type="text"
									labelMessage="Rua"
									isFullWidth
									{...register("line1", {
										required: true,
									})}
								/>

								<Input
									id="line2"
									type="text"
									labelMessage="Complemento"
									isFullWidth
									{...register("line2", {
										required: false,
									})}
								/>

								<Input
									id="postalCode"
									type="text"
									labelMessage="CEP"
									isFullWidth
									{...register("postalCode", {
										required: false,
									})}
								/>

								<Input
									id="city"
									type="text"
									labelMessage="Cidade"
									isFullWidth
									{...register("city", {
										required: false,
									})}
								/>

								<Input
									id="state"
									type="text"
									labelMessage="Estado"
									isFullWidth
									{...register("state", {
										required: false,
									})}
								/>

								<button
									title="Continuar"
									className="btn btn-secondary w-full rounded-xl mt-4"
									onClick={() => setStage("3")}
								>
									Continuar
								</button>
								<button
									title="Voltar"
									className="btn w-full rounded-xl mt-4"
									onClick={() => setStage("1")}
								>
									Voltar
								</button>
							</div>
						)}
						{stage === "3" && (
							<div className="form-control w-full max-w-xs">
								<Input
									id="documentPicture"
									type="file"
									labelMessage="Documento"
									isFullWidth
									{...register("documentPicture", {
										required: true,
									})}
								/>

								<Input
									id="selfieWithDocument"
									type="file"
									labelMessage="Selfie com documento"
									isFullWidth
									{...register("selfieWithDocument", {
										required: true,
									})}
								/>

								<button
									type="submit"
									title="Enviar"
									className="btn btn-secondary w-full rounded-xl mt-4"
									disabled={isSubmitting}
								>
									Enviar
								</button>
								<button
									title="Voltar"
									className="btn w-full rounded-xl mt-4"
									onClick={() => setStage("2")}
								>
									Voltar
								</button>
							</div>
						)}
					</form>
				</div>
			</section>
		</main>
	);
}
