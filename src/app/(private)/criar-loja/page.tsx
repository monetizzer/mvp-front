"use client";

import { Input } from "components/Input";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { TwitterPicker, Color, ColorResult } from "react-color";
import { useForm, useFormState, Controller } from "react-hook-form";

interface Form {
	username: string;
	name: string;
	description: string;
	color: ColorResult;
	avatar: FileList;
	banner: FileList;
}

const API_URL = process.env["NEXT_PUBLIC_API_URL"];

const CreateStore = () => {
	const { handleSubmit, register, control } = useForm<Form>({
		mode: "onChange",
		defaultValues: {
			username: "",
			name: "",
			description: "",
			color: undefined,
			avatar: undefined,
			banner: undefined,
		},
	});
	const { isValid, isSubmitting } = useFormState({ control });
	const router = useRouter();

	const documentStatus = window.localStorage.getItem("documentStatus"); // temp

	if (documentStatus != "confirmed") router.replace("/documentos/stage/1"); // temp

	const storeStatus = window.localStorage.getItem("storeStatus"); // temp

	if (storeStatus === "created") router.replace("/criar-loja/status/created"); // temp

	const onSubmit = async (values: Form) => {
		if (isValid) {
			try {
				const formData = new FormData();

				formData.append("username", values.username);
				formData.append("name", values.name);
				formData.append("description", values.description);
				formData.append("color", values.color.hex);
				formData.append("avatar", values.avatar[0]);
				formData.append("banner", values.banner[0]);

				const token = getCookie("token");
				const response = await fetch(`${API_URL}/stores`, {
					method: "POST",
					body: formData,
					headers: {
						Authorization: `Bearer ${token}`,
					},
				});

				if (response.ok) {
					window.localStorage.setItem("storeStatus", "created"); // temp

					router.push("/criar-loja/status/success");
				}
			} catch (error) {
				console.log(error);

				router.push("/criar-loja/status/error");
			}
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
									pattern: /[A-Za-z0-9_]{7,14}$/,
								})}
							/>
							<Input
								id="name"
								type="text"
								labelMessage="Nome"
								isFullWidth
								{...register("name", {
									required: true,
									maxLength: 50,
									setValueAs: (value: string) => {
										const newValue = value.trimStart().trimEnd();

										return newValue;
									},
								})}
							/>
							<label className="label font-bold" htmlFor="description">
								Descrição
							</label>
							<textarea
								id="description"
								className="rounded-lg flex px-4 py-2 input input-bordered w-full min-h-24"
								{...register("description", {
									required: true,
									maxLength: 500,
									setValueAs: (value: string) => {
										const newValue = value.trimStart().trimEnd();

										return newValue;
									},
								})}
							/>
							<label className="label font-bold" htmlFor="color">
								Cor
							</label>
							<Controller
								control={control}
								name="color"
								rules={{
									required: true,
								}}
								render={({ field: { onChange, value, ref } }) => (
									<TwitterPicker
										width="100%"
										onChange={onChange}
										color={value as unknown as Color}
										ref={ref}
										triangle="hide"
										styles={{
											default: {
												card: {
													backgroundColor: "#f9daf4",
													borderRadius: "0.5rem",
												},
												input: {
													backgroundColor: "#f9daf4",
													height: "30px",
												},
											},
										}}
									/>
								)}
							/>
							<Input
								id="avatar"
								type="file"
								labelMessage="Avatar"
								isFullWidth
								{...register("avatar", {
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
								id="banner"
								type="file"
								labelMessage="Banner"
								isFullWidth
								{...register("banner", {
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
								title="Enviar"
								className="btn btn-secondary w-full mt-4"
								disabled={isSubmitting || !isValid}
							>
								Criar
							</button>
						</div>
					</form>
				</div>
			</section>
		</main>
	);
};

export default CreateStore;
