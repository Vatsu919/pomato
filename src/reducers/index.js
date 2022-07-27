import { combineReducers } from "redux";
import user from './authReducer.js';
import restaurants from './restaurantsReducer.js';
import items from './itemReducer.js';
import orders from './ordersReducer.js';

export default combineReducers({
    user,
    restaurants,
    items,
    orders
});