export interface User {
	uuid: string
	name: string
	surname: string
	email: string
	user_type: "admin" | "user"
	created_at: string
	photo: string
}