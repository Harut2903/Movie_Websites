import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { FilmsAPI } from "../../api/api";
import { FetchFilmsType, FetchFilmType, FilmsType, FilmType } from "../../types";


//// Stex miqich sxalenq arel 
interface FilmsStateType {
    total_pages: number,
    total_results: number,
    page: number,
    results: Array<FilmsType>,
}


interface FilmsStateType1 extends FilmsStateType{
    film : null | FilmType
    search_results : Array<FilmsType>
    text : string
}


export const searchFilms = createAsyncThunk<any, string>(
    'searchFilms',
    async (text) => {
        const res = await FilmsAPI.searchFilm(text)

        return res.data.results
    }
)

export const getFilms = createAsyncThunk<FilmsStateType, FetchFilmsType>(
    'getFilms',
    async ({ page, language }) => {

        const res = await FilmsAPI.getFilms(page, language)
        return res.data
    }
)

export const getOneFilm = createAsyncThunk<any, FetchFilmType>(
    'getOneFilm',
    async ({id, language}) => {
        const res = await FilmsAPI.getOneFilm(id, language)

        return res.data
    }
)

const initialState: FilmsStateType1 = {
    page: 1,
    total_results: 0,
    total_pages: 0,
    results: [],
    search_results : [],
    film : null,
    text : ''
}
const filmSlice = createSlice({
    name: "filmSlice",
    initialState,
    reducers: {
        changePage(state) {
            state.page = state.page + 1
        },
        changeStateText(state, action){
            state.text = action.payload
        }
      
    },
    extraReducers: (builder) => {
        builder.addCase(getFilms.fulfilled, (state, action: PayloadAction<FilmsStateType>) => {
            
            state.results = [...state.results, ...action.payload.results]
            state.page = action.payload.page
            state.total_pages = action.payload.total_pages 
            state.total_results = action.payload.total_results
        })

        builder.addCase(getOneFilm.fulfilled, (state, action : PayloadAction<any>) => {
            state.film = action.payload
        })

        builder.addCase(searchFilms.fulfilled, (state, action) => {
            state.search_results = action.payload 
        })
    }
})

export const { changePage, changeStateText } = filmSlice.actions
export default filmSlice.reducer