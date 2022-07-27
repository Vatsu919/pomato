import * as api from '../api/index.js';
import { GET_CUSTOMER_ORDERS } from '../constants';


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