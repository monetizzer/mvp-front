"use client";

import { useAuth } from "hooks/useAuth";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

interface Props {
	children: ReactNode;
}

const PublicLayout: FC<Props> = ({ children }) => {
	const router = useRouter();
	const auth = useAuth();
	const { user } = auth;

	if (user) router.replace("/user");

	return <>{children}</>;
};

export default PublicLayout;
