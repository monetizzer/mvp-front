"use client";

import { Input } from "components/Input";
import { useState } from "react";
import { useForm, useFormState } from "react-hook-form";
import { ProductTypeEnum } from "types/enums/product-type";

interface Form {
	type: ProductTypeEnum;
	name: string;
	description: string;
	color: string;
	price: number;
	previewImages: Array<Buffer>;
}

interface FormMedias {
	medias: Array<Buffer>;
}

export default function Documents() {
	const { handleSubmit, register, control } = useForm<Form>({
		mode: "onChange",
		defaultValues: {
			type: ProductTypeEnum.PACK,
			name: "",
			description: "",
			color: "",
			price: 100,
			previewImages: [],
		},
	});
	const { isValid, isSubmitting } = useFormState({ control });

	const {
		handleSubmit: handleSubmitMedias,
		register: registerMedias,
		control: controlMedias,
	} = useForm<FormMedias>({
		mode: "onChange",
		defaultValues: {
			medias: [],
		},
	});
	const { isValid: isValidMedias, isSubmitting: isSubmittingMedias } =
		useFormState({ control: controlMedias });

	const [stage, setStage] = useState<"1" | "2">("1");

	const onSubmit = (values: Form) => {
		if (isValid) {
			console.log(values);
			setStage("2");

			return;
		}
	};

	const onSubmitMedias = (values: FormMedias) => {
		if (isValidMedias) {
			console.log(values);

			return;
		}
	};

	return (
		<main className="flex justify-center w-full min-h-[100dvh]">
			<section className="flex items-center justify-center w-full max-w-7xl container-padding">
				{stage === "1" && (
					<div className="card w-full max-w-md flex-shrink-0 xs:bg-base-200 xs:shadow-md container-padding">
						<header className="card-body flex items-center justify-center w-full">
							<h2 className="card-title text-3xl text-center">
								Crie seu conteúdo
							</h2>
						</header>
						<form
							className="flex items-center justify-center flex-col gap-6"
							onSubmit={handleSubmit(onSubmit)}
						>
							<div className="form-control w-full max-w-xs">
								<label className="label font-bold" htmlFor="type">
									Tipo de conteúdo
								</label>
								<select
									className="select select-bordered"
									id="type"
									{...register("type", {
										required: true,
									})}
								>
									<option value={ProductTypeEnum.PACK}>
										Pack (Multiplas imagens, videos ou audios)
									</option>
									<option value={ProductTypeEnum.VIDEO}>
										Vídeo (1 único vídeo)
									</option>
									<option value={ProductTypeEnum.IMAGE}>
										Imagem (1 única imagem)
									</option>
									<option value={ProductTypeEnum.AUDIO}>
										Audio (1 único audio)
									</option>
								</select>

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
									Descrição
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
									id="price"
									type="text"
									labelMessage="Preço"
									isFullWidth
									{...register("price", {
										required: true,
									})}
								/>

								<Input
									id="previewImages"
									type="file"
									labelMessage="Imagens de prévia"
									isFullWidth
									{...register("previewImages", {
										required: true,
									})}
								/>

								<button
									type="submit"
									className="btn btn-secondary w-full mt-4"
									title="Ir para upload das midias"
									disabled={isSubmitting}
								>
									Ir para upload das midias
								</button>
							</div>
						</form>
					</div>
				)}

				{stage === "2" && (
					<div className="card w-full max-w-md flex-shrink-0 xs:bg-base-200 xs:shadow-md container-padding">
						<header className="card-body flex items-center justify-center w-full">
							<h2 className="card-title text-3xl text-center">
								Cadastre as midias do conteúdo
							</h2>
						</header>
						<form
							className="flex items-center justify-center flex-col gap-6"
							onSubmit={handleSubmitMedias(onSubmitMedias)}
						>
							<div className="form-control w-full max-w-xs">
								<Input
									id="medias"
									type="file"
									labelMessage="Midias"
									isFullWidth
									{...registerMedias("medias", {
										required: true,
									})}
								/>

								<button
									type="submit"
									className="btn btn-secondary w-full mt-4"
									title="Ir para upload das midias"
									disabled={isSubmittingMedias}
								>
									Liberar venda do conteúdo
								</button>
							</div>
						</form>
					</div>
				)}
			</section>
		</main>
	);
}
