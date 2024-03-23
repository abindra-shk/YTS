import { APILoadMovies } from "../../api/movies";
import { SET_MOVIES, SET_MOVIE, SET_SUGGESTED_MOVIES } from "./actionTypes";
import axios from "axios";

export const setMovies = (movies) => ({
  type: SET_MOVIES,
  payload: movies,
});

export const setMovie = (movie) => {
  return {
    type: SET_MOVIE,
    payload: movie,
  };
};

export const setSuggestedMovies = (movies) => {
  return {
    type: SET_SUGGESTED_MOVIES,
    payload: movies,
  };
};

export const getMovies = () => (dispatch) => {
  APILoadMovies().then((res) => {
    dispatch(setMovies(res.data.movies));
  });
};
