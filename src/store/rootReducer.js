import {combineReducers} from "redux";
import { countReducer } from "./counter/reducer";
import { movieReducer } from "./movie/reducer";

export default combineReducers({
    countReducer,
    movieReducer
});