"use client";

import { Input } from "components/Input";
import Link from "next/link";
import { useRouter, redirect, RedirectType } from "next/navigation";
import { useEffect } from "react";
import { useForm, useFormState } from "react-hook-form";
import { cepMask } from "utils/cepMask";
import { maskRevert } from "utils/maskRevert";

interface IForm {
	line1: string;
	line2?: string;
	postalCode: string;
	country: string;
	state: string;
	city: string;
}

export default function Documents() {
	const { handleSubmit, register, control, setValue } = useForm<IForm>({
		defaultValues: {
			line1: "",
			line2: "",
			postalCode: "",
			country: "BR",
			state: "",
			city: "",
		},
	});
	const { isValid, isSubmitting } = useFormState({ control });
	const router = useRouter();

	const documentType = window.sessionStorage.getItem("documentType");
	const documentNumber = window.sessionStorage.getItem("documentNumber");
	const fullName = window.sessionStorage.getItem("fullName");
	const birthDate = window.sessionStorage.getItem("birthDate");
	const phone = window.sessionStorage.getItem("phone");

	if (!documentNumber && !documentType && !fullName && !birthDate && !phone) {
		redirect("/documentos/stage/1", RedirectType.replace);
	}

	const onSubmit = (values: IForm) => {
		if (isValid) {
			const { line1, line2, postalCode, country, city, state } = values;

			window.sessionStorage.setItem(
				"address",
				JSON.stringify({
					line1,
					line2,
					postalCode,
					country,
					city,
					state,
				}),
			);

			router.push("/documentos/stage/3");
		}
	};

	useEffect(() => {
		const address = window.sessionStorage.getItem("address");

		if (address) {
			const parse = JSON.parse(address);

			const { line1, line2, postalCode, country, state, city } = parse;

			setValue("line1", line1);
			setValue("line2", line2);
			setValue("postalCode", postalCode);
			setValue("country", country);
			setValue("state", state);
			setValue("city", city);
		}
	}, [setValue]);

	return (
		<form
			className="flex items-center justify-center flex-col gap-6"
			onSubmit={handleSubmit(onSubmit)}
		>
			<div className="form-control w-full max-w-xs">
				<Input
					id="line1"
					type="text"
					labelMessage="Rua"
					isFullWidth
					{...register("line1", {
						required: true,
						maxLength: 100,
					})}
				/>
				<Input
					id="line2"
					type="text"
					labelMessage="Complemento"
					isFullWidth
					{...register("line2", {
						required: false,
						maxLength: 100,
					})}
				/>
				<Input
					id="postalCode"
					type="text"
					labelMessage="CEP"
					isFullWidth
					{...register("postalCode", {
						required: true,
						onChange: (e) => {
							const value = cepMask(e.target.value);

							setValue("postalCode", value);
						},
						setValueAs: (value: string) => {
							const valueWithoutMask = maskRevert(value);

							return valueWithoutMask;
						},
					})}
				/>
				<label className="label font-bold" htmlFor="state">
					País
				</label>
				<select
					className="select select-bordered"
					id="country"
					{...register("country", {
						required: true,
					})}
				>
					<option value="BR">Brasil</option>
				</select>
				<label className="label font-bold" htmlFor="state">
					Estado
				</label>
				<select
					className="select select-bordered"
					id="state"
					{...register("state", {
						required: true,
					})}
				>
					<option value="AC">Acre</option>
					<option value="AL">Alagoas</option>
					<option value="AP">Amapá</option>
					<option value="AM">Amazonas</option>
					<option value="BA">Bahia</option>
					<option value="CE">Ceará</option>
					<option value="DF">Distrito Federal</option>
					<option value="ES">Espírito Santo</option>
					<option value="GO">Goiás</option>
					<option value="MA">Maranhão</option>
					<option value="MT">Mato Grosso</option>
					<option value="MS">Mato Grosso do Sul</option>
					<option value="MG">Minas Gerais</option>
					<option value="PA">Pará</option>
					<option value="PB">Paraíba</option>
					<option value="PR">Paraná</option>
					<option value="PE">Pernambuco</option>
					<option value="PI">Piauí</option>
					<option value="RJ">Rio de Janeiro</option>
					<option value="RN">Rio Grande do Norte</option>
					<option value="RS">Rio Grande do Sul</option>
					<option value="RO">Rondônia</option>
					<option value="RR">Roraima</option>
					<option value="SC">Santa Catarina</option>
					<option value="SP">São Paulo</option>
					<option value="SE">Sergipe</option>
					<option value="TO">Tocantins</option>
					<option value="EX">Estrangeiro</option>
				</select>
				<Input
					id="city"
					type="text"
					labelMessage="Cidade"
					isFullWidth
					{...register("city", {
						required: true,
						maxLength: 100,
					})}
				/>
				<button
					type="submit"
					disabled={isSubmitting || !isValid}
					title="Continuar"
					className="btn btn-secondary w-full mt-4"
				>
					Continuar
				</button>
				<Link
					href="/documentos/stage/1"
					title="Voltar"
					className="btn w-full mt-4"
				>
					Voltar
				</Link>
			</div>
		</form>
	);
}
