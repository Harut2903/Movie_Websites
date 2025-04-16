import axios from 'axios'
import { FilmsType, GenresType } from '../types'

type GET_GENRES_TYPE = {
    genres : Array<GenresType>
}

type GET_FILMS_TYPE = {
    total_pages : number,
    total_results : number,
    page : number,
    results : Array<FilmsType>
}

const instance = axios.create({
    baseURL : 'https://api.themoviedb.org/3/'
})

export const FilmsAPI = {
    getGenres(language : string){
        return instance.get<GET_GENRES_TYPE>(`genre/movie/list?api_key=${import.meta.env.VITE_API_KEY}&language=${language}`)
    },
    getFilms(pageCount : number, language : string){
        return instance.get<GET_FILMS_TYPE>(`discover/movie?api_key=${import.meta.env.VITE_API_KEY}&language=${language}&page=${pageCount}`)
    },
    getOneFilm(id : any, language : string){
        return instance.get(`/movie/${id}?api_key=${import.meta.env.VITE_API_KEY}&language=${language}`)
    },
    searchFilm(text : string){
        return instance.get(`search/movie?api_key=${import.meta.env.VITE_API_KEY}&query=${text}`)
    }
}