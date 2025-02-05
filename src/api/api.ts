import axios from 'axios'

const apiKey = "f36f23edf6e10fd2ddcf939916b1f67a"


const instance = axios.create({
    baseURL : 'https://api.themoviedb.org/3/'

})

export const FilmsAPI = {
    getGenres(){
        return instance.get(`genre/movie/list?api_key=${apiKey}&language=en-US`)
    }
}