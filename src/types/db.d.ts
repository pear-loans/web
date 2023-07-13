export type User = {
	Id: string;
	Platform: string;
	Email: string;
	CreatedAt: string;
};

export interface DB {
	Users: User[];
}
