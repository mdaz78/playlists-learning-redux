import { configureStore } from "@reduxjs/toolkit";
import { reset } from "./actions";
import { addMovie, movieReducer, removeMovie } from "./slices/moviesSlice";
import { addSong, removeSong, songsReducer } from "./slices/songsSlice";

const store = configureStore({
  reducer: {
    songs: songsReducer,
    movies: movieReducer,
  },
});

export { addMovie, addSong, removeMovie, removeSong, reset, store };
