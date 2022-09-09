import { container } from 'tsyringe';

import UserRepository from '../../modules/Accounts/repositories/implementations/userRepository';
import IUserRepository from '../../modules/Accounts/repositories/IUserRepository';
import ICategoryRepository from '../../modules/mangas/repositories/ICategoryRepository';
import { IMangaRepository } from '../../modules/mangas/repositories/IMangaRepository';
import CategoryRepository from '../../modules/mangas/repositories/implementations/CategoryRepository';
import MangaRepository from '../../modules/mangas/repositories/implementations/MangaRepository';

container.registerSingleton<ICategoryRepository>(
    'CategoryRepository',
    CategoryRepository
);

container.registerSingleton<IMangaRepository>(
    'MangaRepository',
    MangaRepository
);

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);
