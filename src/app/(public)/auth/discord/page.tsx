"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Loading from "./loading";
import { setCookie } from "cookies-next";

const API_URL = process.env["NEXT_PUBLIC_API_URL"];

const Discord = () => {
	const [token, setToken] = useState("");
	const router = useRouter();
	const searchParams = useSearchParams();
	const code = searchParams.get("code");

	useEffect(() => {
		const tokenFetch = async () => {
			try {
				const response = await fetch(`${API_URL}/auth/discord`, {
					method: "POST",
					body: JSON.stringify({ code }),
					headers: {
						"Content-Type": "application/json",
					},
				});
				const data = await response.json();
				const token = data.accessToken;

				setToken(token);
			} catch (error) {
				console.log(error);
			}
		};

		tokenFetch();
	}, [code]);

	if (!token) return <Loading />;

	setCookie("token", token);
	router.push("/user");
};

export default Discord;
