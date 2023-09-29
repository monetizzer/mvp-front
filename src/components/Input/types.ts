import type { InputHTMLAttributes } from "react";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	errorMessage?:
		| FieldError
		| Partial<{
				type: string | number;
				message: string;
		  }>
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		| Merge<FieldError, FieldErrorsImpl<any>>;
	labelMessage?: string;
	isFullWidth?: boolean;
}
