import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addPopularMoviesVideo: (state, action) => {
      state.popularMoviesVideo = action.payload;
    },
    addTopRatedMoviesVideo: (state, action) => {
      state.topRatedMoviesVideo = action.payload;
    },
    addUpcomingMoviesVideo: (state, action) => {
      state.upcomingMoviesVideo = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addPopularMoviesVideo,
  addTopRatedMoviesVideo,
  addUpcomingMoviesVideo,
} = moviesSlice.actions;

export default moviesSlice.reducer;
