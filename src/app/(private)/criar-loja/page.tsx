"use client";

import { Input } from "components/Input";
import { useForm, useFormState } from "react-hook-form";

interface IForm {
	username: string;
	name: string;
	description: string;
	color: string;
	avatar?: Buffer;
	banner?: Buffer;
}

export default function Documents() {
	const { handleSubmit, register, control } = useForm<IForm>({
		mode: "onChange",
		defaultValues: {
			username: "",
			name: "",
			description: "",
			color: "",
		},
	});
	const { isValid, isSubmitting } = useFormState({ control });

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
						<h2 className="card-title text-3xl text-center">Crie sua loja</h2>
					</header>
					<form
						className="flex items-center justify-center flex-col gap-6"
						onSubmit={handleSubmit(onSubmit)}
					>
						<div className="form-control w-full max-w-xs">
							<Input
								id="username"
								type="text"
								labelMessage="Username"
								isFullWidth
								{...register("username", {
									required: true,
								})}
							/>

							<Input
								id="name"
								type="text"
								labelMessage="Nome"
								isFullWidth
								{...register("name", {
									required: true,
								})}
							/>

							<label className="label font-bold" htmlFor="description">
								Descricao
							</label>
							<textarea
								id="description"
								className="rounded-lg flex px-4 py-2 input input-bordered w-full h-24"
								{...register("description", {
									required: true,
								})}
							/>

							<label className="label font-bold" htmlFor="color">
								Cor
							</label>
							<select
								className="select select-bordered"
								id="color"
								{...register("color", {
									required: true,
								})}
							>
								<option value="">Nenhuma</option>
								<option value="BR_RG">Rosa Claro</option>
								<option value="BR_RG">Pink</option>
								<option value="BR_CNH">Preto</option>
								<option value="PASSPORT">Vermelho</option>
								<option value="PASSPORT">Amarelo</option>
								<option value="PASSPORT">Azul Claro</option>
							</select>

							<Input
								id="avatar"
								type="file"
								labelMessage="Avatar"
								isFullWidth
								{...register("avatar", {
									required: true,
								})}
							/>

							<Input
								id="banner"
								type="file"
								labelMessage="Banner"
								isFullWidth
								{...register("banner", {
									required: true,
								})}
							/>

							<button
								type="submit"
								title="Enviar"
								className="btn btn-secondary w-full mt-4"
								disabled={isSubmitting}
							>
								Criar
							</button>
						</div>
					</form>
				</div>
			</section>
		</main>
	);
}
