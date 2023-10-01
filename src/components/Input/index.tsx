import React, { ForwardRefRenderFunction } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

import { InputProps } from "./types";

export const InputBase: ForwardRefRenderFunction<
	HTMLInputElement,
	InputProps
> = (
	{
		id,
		errorMessage,
		labelMessage,
		isFullWidth = false,
		className,
		type,
		...rest
	},
	ref,
) => {
	const [showPassword, setShowPassword] = React.useState(false);
	const isCheckbox = type === "checkbox";

	const classNameSchema = isCheckbox
		? `
		checkbox checkbox-primary
		rounded-full
		${className ? className : ""}
	`
		: `
		rounded-lg
		flex px-4 py-2
		input input-bordered

		${type === "password" ? "pr-10" : ""}
		${errorMessage ? "input-error" : ""}
		${isFullWidth ? "w-full" : ""}
		${className ? className : ""}
	`;

	const handleShowPassword = () => {
		setShowPassword(!showPassword);
	};

	return (
		<div
			className={`flex gap-1 items-start relative ${
				isCheckbox
					? "flex-row-reverse items-center justify-end"
					: "flex-col justify-start"
			} ${isFullWidth && "w-full"}`}
		>
			{labelMessage && (
				<label className="label font-bold" htmlFor={id}>
					{labelMessage}
				</label>
			)}
			<input
				id={id}
				ref={ref}
				type={showPassword ? "text" : type}
				className={`${classNameSchema}`}
				{...rest}
			/>
			{type === "password" ? (
				<button
					onClick={handleShowPassword}
					type="button"
					title={showPassword ? "Esconder senha" : "Ver senha"}
					aria-label={showPassword ? "esconder senha" : "ver senha"}
					className="flex items-center justify-center absolute bottom-[6px] right-[1px] p-2 pr-3"
				>
					{showPassword ? (
						<AiFillEye className="w-5 h-5 text-primary-60 hover:text-primary-60/80 transition-all ease-in-out duration-200" />
					) : (
						<AiFillEyeInvisible className="w-5 h-5 text-primary-60 hover:text-primary-60/80 transition-all ease-in-out duration-200" />
					)}
				</button>
			) : null}

			{errorMessage ? (
				<span className="font-light text-error">
					{String(errorMessage?.message)}
				</span>
			) : null}
		</div>
	);
};

export const Input = React.forwardRef(InputBase);
