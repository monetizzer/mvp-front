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
	const [user, setUser] = useState<User | null | undefined>(undefined);

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

		setUser(null);
	}, []);

	const logout = () => {
		deleteCookie("token");
		setUser(null);
	};

	if (user === undefined) {
		return (
			<main className="flex justify-center w-full min-h-[100dvh]">
				<section className="flex items-center justify-center w-full max-w-7xl container-padding">
					<div className="card w-full max-w-md flex-shrink-0 xs:bg-base-200 xs:shadow-md container-padding">
						<header className="card-body flex items-center justify-center w-full mb-8">
							<h2 className="card-title text-3xl text-center">Las Musas</h2>
						</header>
						<div className="flex items-center justify-center flex-col">
							<progress className="progress w-56" />
						</div>
					</div>
				</section>
			</main>
		);
	}

	return (
		<AuthContext.Provider value={{ user, logout }}>
			{children}
		</AuthContext.Provider>
	);
};
