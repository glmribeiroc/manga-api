import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

import { AppError } from '../errors/AppError';
import UserRepository from '../modules/Accounts/repositories/implementations/userRepository';

interface IPayload {
    sub: string;
}

export async function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction
): Promise<void> {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        throw new AppError('Token missing', 401);
    }

    const [, token] = authHeader.split(' ');

    try {
        const { sub: user_id } = verify(
            token,
            '192309aaddc500140db28668e1bbd8b5'
        ) as IPayload;

        const usersRepository = new UserRepository();
        const user = await usersRepository.findById(parseInt(user_id));

        if (!user) {
            throw new AppError('User does not exists!', 401);
        }

        next();
    } catch (error) {
        throw new AppError('Invalid token', 401);
    }
}
