"use client";

import { useAuth } from "hooks/useAuth";
import Link from "next/link";
import { FaUserAlt } from "react-icons/fa";
import { ImFire, ImHome3 } from "react-icons/im";

export const NavBar = () => {
	const { user } = useAuth();

	return (
		<div className="navbar bg-primary text-primary-content sticky bottom-0 z-50 grid grid-cols-3 grid-rows-1 gap-4">
			<Link
				className="tooltip btn btn-ghost normal-case flex flex-col align-center justify-center"
				data-tip="Meus Conteúdos"
				href={user ? "/login" : "/meus-conteudos"}
			>
				<ImFire />
				<span className="hidden md:block">Meus Conteúdos</span>
			</Link>
			<Link
				className="tooltip btn btn-ghost normal-case  flex flex-col align-center justify-center"
				data-tip="Home"
				href="/"
			>
				<ImHome3 />
				<span className="hidden md:block">Home</span>
			</Link>
			<Link
				className="tooltip btn btn-ghost normal-case  flex flex-col align-center justify-center"
				data-tip="Conta"
				href={user ? "/login" : "/conta"}
			>
				<FaUserAlt />
				<span className="hidden md:block">Conta</span>
			</Link>
		</div>
	);
};
