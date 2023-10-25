"use client";

import { Input } from "components/Input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm, useFormState, useFormContext } from "react-hook-form";

interface IForm {
	documentPicture: string;
	selfieWithDocument: string;
}

interface IFormContext {
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
		defaultValues: {
			documentPicture: "",
			selfieWithDocument: "",
		},
	});
	const { isValid, isSubmitting } = useFormState({ control });
	const methods = useFormContext<IFormContext>();
	const router = useRouter();

	const onSubmit = (values: IForm) => {
		if (isValid) {
			const { setValue, getValues } = methods;

			setValue("documentPicture", values.documentPicture);
			setValue("selfieWithDocument", values.selfieWithDocument);

			const documentPicture = getValues("documentPicture");
			const selfieWithDocument = getValues("selfieWithDocument");
			const documentType = getValues("documentType");
			const documentNumber = getValues("documentNumber");
			const name = getValues("name");
			const phone = getValues("phone");
			const line1 = getValues("line1");
			const line2 = getValues("line2");
			const postalCode = getValues("postalCode");
			const city = getValues("city");
			const state = getValues("state");

			router.push("/documentos");

			return;
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
					disabled={isSubmitting}
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
