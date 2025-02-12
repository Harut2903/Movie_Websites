export type GenresType = {
    id: number,
    name: string
}




export interface FilmsType {
    adult: boolean,
    backdrop_path: string,
    genre_ids: Array<number>,
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number

}

export interface FilmType extends FilmsType {
    belongs_to_collection : any | null,
    budget : number,
    genres : Array<GenresType>,
    homepage : string,
    imdb_id : string,
    origin_country : Array<string>,
    production_companies : Array<{id : number, logo_path : string,  origin_country : string, name : string}>,
    production_countries : Array<any>,
    revenue : number,
    runtime : number
    spoken_languages : Array<any>,
    status : string,
    tagline : string
}

export type FetchFilmsType = {
    page: number,
    language: string
}


export type FetchFilmType = {
    id: any,
    language: string
}