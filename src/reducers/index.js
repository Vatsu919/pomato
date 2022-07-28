import { combineReducers } from "redux";
import user from './authReducer.js';
import restaurants from './restaurantsReducer.js';
import items from './itemReducer.js';
import orders from './ordersReducer.js';
import cart from './cartReducer.js';

export default combineReducers({
    user,
    restaurants,
    items,
    orders,
    cart
});