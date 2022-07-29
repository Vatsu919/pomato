import * as api from '../api/index.js';
import { ADD_ITEM, DELETE_ITEM, GET_ITEMS, UPDATE_ITEM } from '../constants';

export const getItems = (restaurantId) => async (dispatch) => {
    try {
        const {data} = await api.getItems(restaurantId);
        console.log(data.items);
        dispatch({type:GET_ITEMS,payload: data.items});
    } catch (error) {
        console.log(error);
    }
}

export const addItem = (restaurantId,FormData) => async (dispatch) => {
    try {
        const {data} = await api.addItem(restaurantId,FormData);
        console.log(data);
        dispatch({type:ADD_ITEM,payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const deleteItem = (restaurantId,itemId,formData) => async (dispatch) => {
    try {
        const result = await api.deleteItem(restaurantId,itemId,formData);
        console.log(result);
        dispatch({type:DELETE_ITEM,payload:itemId});
    } catch (error) {
        console.log(error);
    }
}

export const updateItem = (restaurantId,itemId,formData) => async (dispatch) => {
    try {
        const {data} = await api.updateItem(restaurantId,itemId,formData);
        console.log(data);
        dispatch({type:UPDATE_ITEM,payload:data});
    } catch (error) {
        
    }
}
