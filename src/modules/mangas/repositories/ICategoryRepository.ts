import Category from '../entities/Category';

export default interface ICategoryRepository {
    findByName(name: string): Promise<Category>;
    list(): Promise<Category[]>;
    create(name: string): Promise<void>;
}
