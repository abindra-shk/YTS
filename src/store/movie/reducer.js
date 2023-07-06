import { SET_MOVIES, SET_MOVIE, SET_SUGGESTED_MOVIES } from "./actionTypes";
const initialState = {
  movies:[],
  movie:{},
  suggestedMovies:[]
};

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIES:
      return {
        ...state,
        movies:action.payload,
      };
    case SET_MOVIE:
      return {
        ...state,
        movie:action.payload,
      };
    case SET_SUGGESTED_MOVIES:
      return {
        ...state,
        suggestedMovies:action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
