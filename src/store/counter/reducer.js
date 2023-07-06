import { INCREMENT_COUNT, DECREMENT_COUNT, SET_COUNT } from "./actionTypes";
const initialState = {
  loading: false,
  count: 0,
};

export const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT_COUNT:
      return {
        ...state,
        count: state.count - 1,
      };
    case SET_COUNT:
      return {
        ...state,
        count: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
