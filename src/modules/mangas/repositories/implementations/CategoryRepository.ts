import { prismaClient } from '../../../../database/prismaCliente';
import Category from '../../entities/Category';
import ICategoryRepository from '../ICategoryRepository';

export default class CategoryRepository implements ICategoryRepository {
    async create(name: string): Promise<void> {
        await prismaClient.description.create({
            data: {
                name,
            },
        });
    }

    async list(): Promise<Category[]> {
        const categories = await prismaClient.description.findMany();
        return categories;
    }

    async findByName(name: string): Promise<Category> {
        const category = await prismaClient.description.findFirst({
            where: {
                name,
            },
        });
        return category;
    }
}
