import { hash } from 'bcryptjs';
import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../errors/AppError';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import IUserRepository from '../../repositories/IUserRepository';

@injectable()
export default class CreateUserUseCase {
    constructor(
        @inject('UserRepository')
        private readonly userRepository: IUserRepository
    ) {}

    async execute({ name, email, password }: ICreateUserDTO): Promise<void> {
        const userAlreadyExists = await this.userRepository.findByEmail(email);

        if (userAlreadyExists) {
            throw new AppError(`Email ${email} already exists`);
        }

        const passwordHash = await hash(password, 8);

        await this.userRepository.create({
            name,
            email,
            password: passwordHash,
        });
    }
}
