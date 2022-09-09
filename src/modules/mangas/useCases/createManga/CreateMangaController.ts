import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateMangaUseCase from './CreateMangaUseCase';

export default class CreateMangaRepository {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, other_name, author, artist, status, release, synopsis } =
            request.body;
        const createMangaUseCase = container.resolve(CreateMangaUseCase);
        await createMangaUseCase.execute({
            name,
            other_name,
            author,
            artist,
            status,
            release,
            synopsis,
        });

        return response.status(201).send();
    }
}
