"use client";

import { Input } from "components/Input";
import { useRouter } from "next/navigation";
import { RefAttributes, forwardRef, useEffect } from "react";
import { useForm, useFormState } from "react-hook-form";
import {
	DefaultInputComponentProps,
	isPossiblePhoneNumber,
} from "react-phone-number-input";
import PhoneInput from "react-phone-number-input/react-hook-form-input";
import { cnpjMask } from "utils/cnpjMask";
import { cpfMask } from "utils/cpfMask";
import { isCnpj } from "utils/isCnpj";
import { isCpf } from "utils/isCpf";
import { maskRevert } from "utils/maskRevert";

interface IForm {
	documentType: "BR_CPF" | "BR_CNH" | "PASSPORT";
	documentNumber: string;
	fullName: string;
	birthDate: string;
	phone: string;
}

const StageOneDocuments = () => {
	const { handleSubmit, register, control, setValue, getValues } =
		useForm<IForm>({
			defaultValues: {
				documentType: "BR_CPF",
				documentNumber: "",
				fullName: "",
				birthDate: "",
				phone: "",
			},
		});
	const { isValid, isSubmitting } = useFormState({ control });
	const router = useRouter();

	const documentStatus = window.localStorage.getItem("documentStatus"); // temp

	if (documentStatus === "sent") router.replace("/documentos/status/sent"); // temp

	const onSubmit = (values: IForm) => {
		if (isValid) {
			const { documentType, documentNumber, fullName, birthDate, phone } =
				values;

			window.sessionStorage.setItem("documentType", documentType);
			window.sessionStorage.setItem("documentNumber", documentNumber);
			window.sessionStorage.setItem("fullName", fullName);
			window.sessionStorage.setItem("birthDate", birthDate);
			window.sessionStorage.setItem("phone", phone);

			router.push("/documentos/stage/2");
		}
	};

	useEffect(() => {
		const documentType = window.sessionStorage.getItem("documentType");
		const documentNumber = window.sessionStorage.getItem("documentNumber");
		const fullName = window.sessionStorage.getItem("fullName");
		const birthDate = window.sessionStorage.getItem("birthDate");
		const phone = window.sessionStorage.getItem("phone");

		if (documentType)
			setValue(
				"documentType",
				documentType as "BR_CPF" | "BR_CNH" | "PASSPORT",
			);

		if (documentNumber) setValue("documentNumber", documentNumber);

		if (fullName) setValue("fullName", fullName);

		if (birthDate) setValue("birthDate", birthDate);

		if (phone) setValue("phone", phone);
	}, [setValue]);

	return (
		<form
			className="flex items-center justify-center flex-col gap-6"
			onSubmit={handleSubmit(onSubmit)}
		>
			<div className="form-control w-full max-w-xs">
				<label className="label font-bold" htmlFor="documentType">
					Tipo de documento
				</label>
				<select
					className="select select-bordered"
					id="documentType"
					{...register("documentType", {
						required: true,
						onChange: () => {
							setValue("documentNumber", "");
						},
					})}
				>
					<option value="BR_CPF">CPF</option>
					<option value="BR_CNH">CNH</option>
					<option value="PASSPORT">Passaporte</option>
				</select>
				<Input
					id="documentNumber"
					type="text"
					labelMessage="Nº do Documento"
					isFullWidth
					{...register("documentNumber", {
						required: true,
						validate: (value) => {
							const valueWithoutMask = maskRevert(value);
							const documentType = getValues("documentType");

							switch (documentType) {
								case "BR_CPF":
									return isCpf(valueWithoutMask);
								case "BR_CNH":
									return isCnpj(valueWithoutMask);
								case "PASSPORT":
									return /^[a-zA-Z0-9]{1,9}$/.test(value);
								default:
									return;
							}
						},
						onChange: (event) => {
							const documentType = getValues("documentType");
							let value: string;

							switch (documentType) {
								case "BR_CPF":
									value = cpfMask(event.target.value);

									break;
								case "BR_CNH":
									value = cnpjMask(event.target.value);

									break;
								case "PASSPORT":
								default:
									value = event.target.value;

									break;
							}

							setValue("documentNumber", value);
						},
						setValueAs: (value: string) => {
							const valueWithoutMask = maskRevert(value);

							return valueWithoutMask;
						},
					})}
				/>
				<Input
					id="fullName"
					type="text"
					labelMessage="Nome completo"
					isFullWidth
					{...register("fullName", {
						required: true,
						validate: (value: string) => {
							return /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'\s]+$/.test(
								value,
							);
						},
						setValueAs: (value: string) => {
							const newValue = value.trimStart().trimEnd();

							return newValue;
						},
					})}
				/>
				<Input
					id="name"
					type="date"
					labelMessage="Data de nascimento"
					isFullWidth
					{...register("birthDate", {
						required: true,
					})}
				/>
				<PhoneInput
					name="phone"
					defaultCountry="BR"
					control={control}
					international
					rules={{
						required: true,
						validate: isPossiblePhoneNumber,
					}}
					// eslint-disable-next-line react/display-name
					inputComponent={forwardRef(
						(
							props: DefaultInputComponentProps &
								RefAttributes<HTMLInputElement>,
							ref: React.ForwardedRef<HTMLInputElement>,
						) => {
							return (
								<Input
									id="phone"
									type="tel"
									labelMessage="Nº de telefone"
									isFullWidth
									ref={ref}
									{...props}
								/>
							);
						},
					)}
				/>
				<button
					type="submit"
					disabled={isSubmitting || !isValid}
					title="Continuar"
					className="btn btn-secondary w-full mt-4"
				>
					Continuar
				</button>
			</div>
		</form>
	);
};

export default StageOneDocuments;
