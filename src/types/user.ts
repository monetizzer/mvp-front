export interface User {
	accountId: string;
	isAdmin: boolean;
	discord: {
		id: string;
		username: string;
	};
}
