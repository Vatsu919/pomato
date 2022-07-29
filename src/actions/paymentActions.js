import * as api from '../api/index.js';
import { GET_ALL_PAYMENTS } from '../constants';

export const getPayments = () => async (dispatch) => {
    try {
        const {data} = await api.getPayments();
        console.log("Dataaaa:",data.payments);
        dispatch({type:GET_ALL_PAYMENTS,payload: data.payments});
    } catch (error) {
        console.log(error);
    }
}