import { DECREMENT_COUNT, INCREMENT_COUNT, SET_COUNT } from "./actionTypes"

export const increaseCount=()=>{
    return {
        type: INCREMENT_COUNT,
    }
}

export const decreaseCount=()=>{
    return {
        type: DECREMENT_COUNT,
    }
}

export const setCount=(count)=>{
    return {
        type: SET_COUNT,
        payload: count
    }
}