import { DocumentStatusEnum } from "./enums/document-status";

export interface User {
	accountId: string;
	isAdmin: boolean;
	username: string;
	dvs: DocumentStatusEnum;
	discord?: {
		id: string;
		username: string;
	};
	store?: {
		id: string;
		color?: string;
	};
}
