import { Router } from 'express';

import CreateMangaRepository from '../modules/mangas/useCases/createManga/CreateMangaController';

export const mangasRoutes = Router();

const createMangaRepository = new CreateMangaRepository();

mangasRoutes.post('/', createMangaRepository.handle);
