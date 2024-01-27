import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name : "movies",
    initialState : {
        nowPlayingMovies : [],
        trailerVideo : {},
        popularVideos : []
    },
    reducers : {
        addNowPlayingMovies : (state,action) => {
            state.nowPlayingMovies = action.payload
        },
        addTrailerVideos : (state,action) => {
            state.trailerVideo = action.payload
        },
        addPopularVideos : (state,action) => {
            state.popularVideos = action.payload
        }
    }
}) 

export const { addNowPlayingMovies,addTrailerVideos,addPopularVideos } = movieSlice.actions
export default movieSlice.reducer