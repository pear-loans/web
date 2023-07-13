export type User = {
	Id: string;
	Platform: string;
	Email: string;
};

export interface DB {
	Users: User[];
}
