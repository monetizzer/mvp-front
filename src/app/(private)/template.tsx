"use client";

import { useAuth } from "hooks/useAuth";
import { redirect, RedirectType } from "next/navigation";
import { ReactNode } from "react";

interface Props {
	children: ReactNode;
}

const PrivateLayout: FC<Props> = ({ children }) => {
	const auth = useAuth();
	const { user } = auth;

	if (user === null) redirect("/login", RedirectType.replace);

	return <>{children}</>;
};

export default PrivateLayout;
