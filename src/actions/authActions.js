import * as api from '../api';
import { AUTH, SIGNUP } from '../constants';

export const customerSignup = (formData,history) => async (dispatch) => {
    try {
        
        const result = await api.customerSignup(formData);
        console.log(result);
        dispatch({type: SIGNUP});
        
        
    } catch (error) {
        console.log(error);
    }
}

export const customerSignin = (formData,history) => async (dispatch) => {
    try {
        const {data} = await api.customerSignin(formData);
        console.log(data);
        dispatch({type:AUTH,payload:data});
        history.push('/');
    } catch (error) {
        console.log(error);
        
    }
}