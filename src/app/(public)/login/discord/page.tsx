"use client";

import { setCookie } from "cookies-next";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import Error from "./error";
import Loading from "./loading";

const API_URL = process.env["NEXT_PUBLIC_API_URL"];

const Discord = () => {
	const [status, setStatus] = useState<"loading" | "error" | "success">(
		"loading",
	);
	const [token, setToken] = useState("");
	const searchParams = useSearchParams();
	const code = searchParams.get("code");

	useEffect(() => {
		if (!code) {
			setStatus("error");

			return;
		}

		const tokenFetch = async () => {
			try {
				const response = await fetch(`${API_URL}/auth/discord`, {
					method: "POST",
					body: JSON.stringify({
						code,
						origin: window.location.href.split("?").shift()!,
					}),
					headers: {
						"Content-Type": "application/json",
					},
				});
				const data = await response.json();
				const token = data.accessToken;

				setStatus("success");
				setToken(token);
			} catch (error) {
				setStatus("error");

				console.log(error);
			}
		};

		tokenFetch();
	}, [code]);

	useEffect(() => {
		if (token) {
			setCookie("token", token);

			window.history.go(-3);
		}
	}, [token]);

	if (status === "loading") return <Loading />;

	if (status === "error") return <Error />;

	return (
		<div>
			<header className="card-body flex items-center justify-center w-full mb-8">
				<h2 className="card-title text-3xl text-center">Entrou</h2>
			</header>
			<div className="flex items-center justify-center flex-col">
				<button
					className="btn btn-secondary w-full mt-4"
					onClick={() => window.history.go(-3)}
				>
					Voltar
				</button>
			</div>
		</div>
	);
};

export default Discord;
