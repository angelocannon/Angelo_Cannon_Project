export interface Movie {
    _id: number;
    name: string;
    director: string;
    releaseDate: string;
}

export interface Character {
    _id: number;
    name: string;
    race: string;
    gender: string;
}

export interface Quote {
    _id: number;
    dialog: string;
    character: Character;
    movie: Movie;
}