"use client";

import { getCookie, deleteCookie } from "cookies-next";
import { createContext, useState, useEffect, ReactNode } from "react";
import { User } from "types/user";

interface IAuthContext {
	user?: User | null;
	logout: () => void;
}

interface Props {
	children: ReactNode;
}

const API_URL = process.env["NEXT_PUBLIC_API_URL"];

export const AuthContext = createContext({} as IAuthContext);

export const AuthProvider: FC<Props> = ({ children }) => {
	const [user, setUser] = useState<User | undefined>(undefined);

	useEffect(() => {
		const userFetch = async (token: string) => {
			try {
				const response = await fetch(`${API_URL}/accounts/iam`, {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				});
				const data = await response.json();

				setUser(data);
			} catch (error) {
				console.log(error);
			}
		};
		const token = getCookie("token");

		if (token) {
			userFetch(token);

			return;
		}

		setUser(undefined);
	}, []);

	const logout = () => {
		deleteCookie("token");
		setUser(undefined);
	};

	return (
		<AuthContext.Provider value={{ user, logout }}>
			{children}
		</AuthContext.Provider>
	);
};
