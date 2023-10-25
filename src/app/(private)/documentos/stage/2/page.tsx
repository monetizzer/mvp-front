"use client";

import { Input } from "components/Input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm, useFormState, useFormContext } from "react-hook-form";

interface IForm {
	line1: string;
	line2: string;
	postalCode: string;
	city: string;
	state: string;
}

export default function Documents() {
	const { handleSubmit, register, control } = useForm<IForm>({
		defaultValues: {
			line1: "",
			line2: "",
			postalCode: "",
			city: "",
			state: "",
		},
	});
	const { isValid, isSubmitting } = useFormState({ control });
	const methods = useFormContext<IForm>();
	const router = useRouter();

	const onSubmit = (values: IForm) => {
		if (isValid) {
			const { setValue } = methods;
			const { line1, line2, postalCode, city, state } = values;

			setValue("line1", line1);
			setValue("line2", line2);
			setValue("postalCode", postalCode);
			setValue("city", city);
			setValue("state", state);

			router.push("/documentos/stage/3");

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
					type="submit"
					disabled={isSubmitting}
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
