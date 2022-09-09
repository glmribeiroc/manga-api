import { Router } from 'express';

import { authenticateRoutes } from './authenticate.routes';
import { categoriesRoutes } from './category.routes';
import { mangasRoutes } from './manga.routes';
import { userRoutes } from './user.routes';

export const router = Router();

router.use('/categories', categoriesRoutes);
router.use('/mangas', mangasRoutes);
router.use('/users', userRoutes);
router.use('/auth', authenticateRoutes);
