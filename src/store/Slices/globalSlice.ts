import { createSlice } from "@reduxjs/toolkit";


// en-US || ru-RU
const initialState = {
    language : 'en-US'
}
const globalSlice = createSlice({
    name : "globalSlice",
    initialState,
    reducers : {
        changeLanguage(state, action){
            state.language = action.payload
        }
    }
})

export const {changeLanguage} = globalSlice.actions

export default globalSlice.reducer