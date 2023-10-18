"use client";

import { useAuth } from "hooks/useAuth";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

interface Props {
	children: ReactNode;
}

const PrivateLayout: FC<Props> = ({ children }) => {
	const router = useRouter();
	const auth = useAuth();
	const { user } = auth;

	if (user === null) router.replace("/login");

	return <>{children}</>;
};

export default PrivateLayout;
