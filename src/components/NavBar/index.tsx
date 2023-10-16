"use client";

import { useAuth } from "hooks/useAuth";
import Link from "next/link";
import { FaUserAlt } from "react-icons/fa";
import { ImFire } from "react-icons/im";

export const NavBar = () => {
	const { user } = useAuth();

	return (
		<div className="navbar bg-primary text-primary-content sticky bottom-0 z-50 grid grid-cols-3 grid-rows-1">
			<Link
				className="tooltip btn btn-ghost normal-case flex flex-col align-center justify-center"
				data-tip="Meus Conteúdos"
				href={user ? "/meus-conteudos" : "/login"}
			>
				<ImFire />
				<span className="text-xs">Minhas Compras</span>
			</Link>
			<Link
				className="tooltip btn btn-ghost normal-case  flex flex-col align-center justify-center"
				data-tip="Home"
				href="/"
			>
				<img
					alt="Home"
					src="/logo-transparent.png"
					style={{ height: "2.3em" }}
				/>
			</Link>
			<Link
				className="tooltip btn btn-ghost normal-case  flex flex-col align-center justify-center"
				data-tip="Conta"
				href={user ? "/conta" : "/login"}
			>
				<FaUserAlt />
				<span className="text-xs">Conta</span>
			</Link>
		</div>
	);
};
