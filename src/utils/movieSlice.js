import { createSlice } from "@reduxjs/toolkit";

const movieSlice =createSlice({
    name : "movie",
    initialState :{
        nowPlayinMovies : null,
        movieTrailer : null,
    },
    reducers :{
        addNowPlayingMovies : (state , action ) =>{
            state.nowPlayinMovies=action.payload;
        },
        addMovieTrailer : (state,action) =>{
            state.movieTrailer =action.payload;
        }
    },
});

export const {addNowPlayingMovies,addMovieTrailer} =movieSlice.actions;

export default movieSlice.reducer;