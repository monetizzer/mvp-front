"use client";

import { Input } from "components/Input";
import { getCookie } from "cookies-next";
import Link from "next/link";
import { RedirectType, redirect, useRouter } from "next/navigation";
import { useForm, useFormState } from "react-hook-form";
import { formatPhoneNumber } from "react-phone-number-input";
import { maskRevert } from "utils/maskRevert";

interface IForm {
	documentPicture: FileList;
	selfieWithDocument: FileList;
}

const API_URL = process.env["NEXT_PUBLIC_API_URL"];

export default function Documents() {
	const { handleSubmit, register, control } = useForm<IForm>({
		defaultValues: {
			documentPicture: undefined,
			selfieWithDocument: undefined,
		},
	});
	const { isValid, isSubmitting } = useFormState({ control });
	const router = useRouter();

	const address = window.sessionStorage.getItem("address");

	if (!address) {
		redirect("/documentos/stage/2", RedirectType.replace);
	}

	const documentType = window.sessionStorage.getItem("documentType");
	const documentNumber = window.sessionStorage.getItem("documentNumber");
	const fullName = window.sessionStorage.getItem("fullName");
	const birthDate = window.sessionStorage.getItem("birthDate");
	const phone = window.sessionStorage.getItem("phone");

	if (!documentNumber && !documentType && !fullName && !birthDate && !phone) {
		redirect("/documentos/stage/1", RedirectType.replace);
	}

	const onSubmit = async (values: IForm) => {
		if (isValid) {
			try {
				const nationalNumber = formatPhoneNumber(phone!);
				const numberWithoutMask = maskRevert(nationalNumber);
				const formData = new FormData();

				formData.append("type", documentType!);
				formData.append("documentNumber", documentNumber!);
				formData.append("fullName", fullName!);
				formData.append("birthDate", birthDate!);
				formData.append("phone", numberWithoutMask);
				formData.append("address", address);
				formData.append("documentPicture", values.documentPicture[0]);
				formData.append("selfieWithDocument", values.selfieWithDocument[0]);

				window.sessionStorage.removeItem("documentType");
				window.sessionStorage.removeItem("documentNumber");
				window.sessionStorage.removeItem("fullName");
				window.sessionStorage.removeItem("birthDate");
				window.sessionStorage.removeItem("phone");
				window.sessionStorage.removeItem("address");

				const token = getCookie("token");
				const response = await fetch(`${API_URL}/documents/complete`, {
					method: "POST",
					body: formData,
					headers: {
						Authorization: `Bearer ${token}`,
					},
				});

				if (response.ok) {
					window.localStorage.setItem("documentStatus", "sent"); // temp

					router.push("/documentos/status/success");
				}
			} catch (error) {
				console.log(error);

				router.push("/documentos/status/error");
			}
		}
	};

	return (
		<form
			className="flex items-center justify-center flex-col gap-6"
			onSubmit={handleSubmit(onSubmit)}
		>
			<div className="form-control w-full max-w-xs">
				<Input
					id="documentPicture"
					type="file"
					labelMessage="Documento"
					isFullWidth
					{...register("documentPicture", {
						required: true,
						validate: (value: FileList) => {
							const image = value[0];
							const fiveMB = 51240;
							const imageSizeInMB = image.size / 1048;

							if (imageSizeInMB <= fiveMB) {
								return /(png|jpg|jpeg)$/.test(image.type);
							}

							return false;
						},
					})}
				/>
				<Input
					id="selfieWithDocument"
					type="file"
					labelMessage="Selfie com documento"
					isFullWidth
					{...register("selfieWithDocument", {
						required: true,
						validate: (value: FileList) => {
							const image = value[0];
							const fiveMB = 51240;
							const imageSizeInMB = image.size / 1048;

							if (imageSizeInMB <= fiveMB) {
								return /(png|jpg|jpeg)$/.test(image.type);
							}

							return false;
						},
					})}
				/>
				<button
					type="submit"
					disabled={isSubmitting || !isValid}
					title="Enviar"
					className="btn btn-secondary w-full mt-4"
				>
					Enviar
				</button>
				<Link
					href="/documentos/stage/2"
					title="Voltar"
					className="btn w-full mt-4"
				>
					Voltar
				</Link>
			</div>
		</form>
	);
}
