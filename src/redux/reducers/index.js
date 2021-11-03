import {combineReducers} from 'redux'
import { postReducer, imgReducer } from './postReducer'

const reducers = combineReducers({
    allPosts: postReducer,
    allImg: imgReducer
})
export default reducers