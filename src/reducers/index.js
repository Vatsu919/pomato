import { combineReducers } from "redux";
import user from './authReducer.js'
import restaurants from './restaurantsReducer.js'

export default combineReducers({
    user,
    restaurants
});