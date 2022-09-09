import Manga from '../entities/Manga';

interface ICreateMangaDTO {
    name: string;
    other_name?: string;
    author: string;
    artist: string;
    status: string;
    release: string;
    synopsis: string;
    created_at?: Date;
}

interface IMangaRepository {
    create: ({
        name,
        other_name,
        author,
        artist,
        status,
        release,
        synopsis,
    }: ICreateMangaDTO) => void;

    findByName(name: string): Promise<Manga>;
}

export { ICreateMangaDTO, IMangaRepository };
