import * as api from '../api/index.js';
import { CLEAR_CART, FLASH_MESSAGE, GET_CUSTOMER_ORDERS, GET_MANAGER_ORDERS, PLACE_ORDER } from '../constants';


export const getOrders = (userId) => async (dispatch) => {
    try {
        console.log(userId);
        const {data} = await api.getOrders(userId);
        console.log(data);
        dispatch({type:GET_CUSTOMER_ORDERS,payload:data.foodOrders});
    } catch (error) {
        console.log(error);
    }
}

export const placeOrder = (formData,history) => async (dispatch) => {
    try {
        const {data} = await api.placeOrder(formData);
        console.log(data);
        dispatch({type:PLACE_ORDER,payload:data});
        dispatch({type:CLEAR_CART});
        dispatch({type:FLASH_MESSAGE});
        history('/');
    } catch (error) {
        console.log(error);
        
    }
}

export const getManagerOrders = (restaurantId,userId) => async (dispatch) => {
    try {
        const {data} = await api.getManagerOrders(restaurantId,userId);
        dispatch({type:GET_MANAGER_ORDERS,payload:data.list});
    } catch (error) {
        console.log(error);
    }
}