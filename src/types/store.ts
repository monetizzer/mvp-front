export interface Store {
	storeId: string;
	accountId: string;
	username: string;
	name: string;
	description: string;
	color?: string;
	bannerUrl?: string;
	avatarUrl?: string;
	createdAt: Date;
}
