import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../errors/AppError';
import ICategoriesRepository from '../../repositories/ICategoryRepository';

@injectable()
export default class CreateCategoryUseCase {
    constructor(
        @inject('CategoryRepository')
        private readonly categoriesRepository: ICategoriesRepository
    ) {}

    async execute(name: string): Promise<void> {
        const categoryAlreadyExists =
            await this.categoriesRepository.findByName(name);

        if (categoryAlreadyExists) {
            throw new AppError(`Category ${name} already exists`);
        }

        this.categoriesRepository.create(name);
    }
}
