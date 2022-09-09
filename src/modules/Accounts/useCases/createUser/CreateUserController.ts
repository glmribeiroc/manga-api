import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateUserUseCase from './CreateUserUseCase';

export default class CreateUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, email, password } = request.body;
        const createaUserUseCase = container.resolve(CreateUserUseCase);

        await createaUserUseCase.execute({ name, email, password });

        return response.status(201).send();
    }
}
