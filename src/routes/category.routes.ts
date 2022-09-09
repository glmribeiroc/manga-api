import { Router } from 'express';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import CreateCategoryController from '../modules/mangas/useCases/createCategory/CreateCategoryController';
import ListCategoriesController from '../modules/mangas/useCases/listCategories/ListCategoriesController';

const categoriesRoutes = Router();

const createCategoryController = new CreateCategoryController();
const listCategoriesController = new ListCategoriesController();

categoriesRoutes.use(ensureAuthenticated);
categoriesRoutes.post('/', createCategoryController.handle);

categoriesRoutes.get('/', listCategoriesController.handle);

export { categoriesRoutes };
