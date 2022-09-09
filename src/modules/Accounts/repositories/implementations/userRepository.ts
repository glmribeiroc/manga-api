import { prismaClient } from '../../../../database/prismaCliente';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import User from '../../entities/User';
import IUserRepository from '../IUserRepository';

export default class UserRepository implements IUserRepository {
    async create({ name, email, password }: ICreateUserDTO): Promise<void> {
        await prismaClient.user.create({
            data: { name, email, password },
        });
    }

    async findByEmail(email: string): Promise<User> {
        const user = await prismaClient.user.findFirst({ where: { email } });
        return user;
    }

    async findById(id: number): Promise<User> {
        const user = await prismaClient.user.findFirst({
            where: { id },
        });
        return user;
    }
}
