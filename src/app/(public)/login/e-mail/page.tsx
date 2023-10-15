"use client";

import { Input } from "components/Input";
import { useRouter } from "next/navigation";
import { useForm, useFormState } from "react-hook-form";

interface IForm {
	email: string;
}

const Email = () => {
	const { handleSubmit, register, control } = useForm<IForm>({
		mode: "onChange",
		defaultValues: {
			email: "",
		},
	});

	const { isValid, isSubmitting } = useFormState({ control });

	const router = useRouter();

	const onSubmit = (values: IForm) => {
		if (isValid) {
			router.push(`/login/e-mail/success?e-mail=${values.email}`);

			return;
		}
	};

	return (
		<>
			<header className="card-body flex items-center justify-center w-full mb-8">
				<h2 className="card-title text-3xl text-center">
					Entrar ou criar conta
				</h2>
			</header>
			<form
				className="flex items-center justify-center flex-col gap-6"
				onSubmit={handleSubmit(onSubmit)}
			>
				<Input
					id="email"
					type="email"
					labelMessage="E-mail"
					isFullWidth
					{...register("email", {
						required: true,
					})}
				/>
				<button
					type="submit"
					title="Enviar"
					className="btn btn-secondary w-full rounded-xl"
					disabled={isSubmitting}
				>
					Enviar
				</button>
			</form>
		</>
	);
};

export default Email;
