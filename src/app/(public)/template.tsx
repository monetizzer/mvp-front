"use client";

import { useAuth } from "hooks/useAuth";
import { redirect, RedirectType } from "next/navigation";
import { ReactNode } from "react";

interface Props {
	children: ReactNode;
}

const PublicLayout: FC<Props> = ({ children }) => {
	const auth = useAuth();
	const { user } = auth;

	if (user) redirect("/conta", RedirectType.replace);

	return <>{children}</>;
};

export default PublicLayout;
