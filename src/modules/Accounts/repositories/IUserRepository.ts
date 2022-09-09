import { ICreateUserDTO } from '../dtos/ICreateUserDTO';
import User from '../entities/User';

export default interface IUserRepository {
    create(data: ICreateUserDTO): Promise<void>;
    findByEmail(email: string): Promise<User>;
    findById(id: number): Promise<User>;
}
