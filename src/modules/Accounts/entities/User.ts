export default class User {
    id: number;
    name: string;
    email: string;
    password: string;
    avatar?: string;
    isAdmin: boolean;
    created_at: Date;
}
