import * as api from '../api/index.js';
import { GET_ITEMS } from '../constants';

export const getItems = (restaurantId) => async (dispatch) => {
    try {
        const {data} = await api.getItems(restaurantId);
        console.log(data.items);
        dispatch({type:GET_ITEMS,payload: data.items});
    } catch (error) {
        console.log(error);
    }
}