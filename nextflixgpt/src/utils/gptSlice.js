import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name : "gpt",
    initialState : {
       showGptSearch : false,
       movieResults : null,
       movieName : null
    },
    reducers : {
      toggleGptSearchView : (state,action) =>{
          state.showGptSearch = ! state.showGptSearch
      },
      addGptMovieResult : (state,action) =>{
          const {movieName,movieResults} = action.payload;
          state.movieResults = movieResults;
          state.movieName = movieName
      }
    }
})

export const {toggleGptSearchView,addGptMovieResult} = gptSlice.actions
export default gptSlice.reducer