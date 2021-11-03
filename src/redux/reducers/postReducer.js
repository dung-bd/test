import { ActionTypes } from "../constants/action-types"
const initialState = {
    posts:[]
}
const initialState1 = {
    imgs:[]
}
export const postReducer = (state = initialState, action)=>{
    switch(action.type){
        case ActionTypes.ADD_POST:
            return {...state,posts: action.payload}
            default:
                return state;
    }
}
export const imgReducer = (state = initialState1, action)=>{
    switch(action.type){
        case ActionTypes.ADD_IMG:
            return [...state, action.payload];
            default:
                return state;
    }
}