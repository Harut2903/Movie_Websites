import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { FilmsAPI } from "../../api/api";
import { FilmObj } from "../../pages/Home/Home";
import { FilmsType } from "../../types";



export const getFilms = createAsyncThunk<FilmsStateType, FilmObj>(
    'getFilms',
    async ({page, language}) => {
        const res = await FilmsAPI.getFilms(page, language)

        return res.data
    }
)

type FilmsStateType = {
    total_pages : number,
    total_results : number,
    page : number,
    results : Array<FilmsType>
}

const initialState : FilmsStateType = {
    page : 1,
    total_results : 0,
    total_pages : 0,
    results : []
}


const filmSlice = createSlice({
    name : 'filmSlice',
    initialState,
    reducers : {

    },
    extraReducers : (builder) => {
        builder.addCase(getFilms.fulfilled, (state, action : PayloadAction<FilmsStateType>) => {
            state.results = action.payload.results
        })
    }
})


export default filmSlice.reducer