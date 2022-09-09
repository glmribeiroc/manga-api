import { prismaClient } from '../../../../database/prismaCliente';
import Manga from '../../entities/Manga';
import { IMangaRepository, ICreateMangaDTO } from '../IMangaRepository';

export default class MangaRepository implements IMangaRepository {
    async create({
        name,
        other_name,
        author,
        artist,
        status,
        release,
        synopsis,
    }: ICreateMangaDTO): Promise<void> {
        await prismaClient.manga.create({
            data: {
                name,
                other_name,
                author,
                artist,
                status,
                release,
                synopsis,
            },
        });
    }

    async findByName(name: string): Promise<Manga> {
        const manga = await prismaClient.manga.findFirst({
            where: { name },
        });

        return manga;
    }
}
