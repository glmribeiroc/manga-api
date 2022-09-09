import { Router } from 'express';

import CreateUserController from '../modules/Accounts/useCases/createUser/CreateUserController';

export const userRoutes = Router();

const createUserController = new CreateUserController();

userRoutes.post('/', createUserController.handle);
