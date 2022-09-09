import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../errors/AppError';
import MangaRepository from '../../repositories/implementations/MangaRepository';

interface IRequest {
    name: string;
    other_name: string;
    author: string;
    artist: string;
    status: string;
    release: string;
    synopsis: string;
}

@injectable()
export default class CreateMangaUseCase {
    constructor(
        @inject('MangaRepository')
        private readonly mangaRepository: MangaRepository
    ) {}

    async execute({
        name,
        other_name,
        author,
        artist,
        status,
        release,
        synopsis,
    }: IRequest): Promise<void> {
        const mangaAlreadyExists = await this.mangaRepository.findByName(name);

        if (mangaAlreadyExists) {
            throw new AppError(`Manga ${name} already exists`);
        }

        this.mangaRepository.create({
            name,
            other_name,
            author,
            artist,
            status,
            release,
            synopsis,
        });
    }
}
