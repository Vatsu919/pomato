import * as api from '../api/index.js';
import { GET_ALL_RESTAURANTS } from '../constants/index.js';


export const getRestaurants = () => async (dispatch) => {
    try {
        console.log("getRes called:::")
        const {data} = await api.getRestaurants();
        console.log(data);
        dispatch({type:GET_ALL_RESTAURANTS,payload:data});
    } catch (error) {
        console.log(error);
    }
}