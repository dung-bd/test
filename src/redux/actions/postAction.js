import {ActionTypes} from "../constants/action-types"
export const addPosts = (posts)=>{
    return{
        type: ActionTypes.ADD_POST,
        payload: posts,
    }
}
export const addImg = (imgs)=>{
    return{
        type: ActionTypes.ADD_IMG,
        payload: imgs,
    }
}