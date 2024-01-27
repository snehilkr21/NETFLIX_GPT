import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name : "movies",
    initialState : {
        nowPlayingMovies : [],
        trailerVideo : {}
    },
    reducers : {
        addNowPlayingMovies : (state,action) => {
            state.nowPlayingMovies = action.payload
        },
        addTrailerVideos : (state,action) => {
            state.trailerVideo = action.payload
        }
    }
}) 

export const { addNowPlayingMovies,addTrailerVideos } = movieSlice.actions
export default movieSlice.reducer