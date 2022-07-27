import * as api from '../api';
import { AUTH, SIGNUP } from '../constants';

export const customerSignup = (formData,history) => async (dispatch) => {
    try {
        
        const {data} = await api.customerSignup(formData);
        console.log(data);
        dispatch({type: AUTH,payload: data});
        history.push('/');
        
        
    } catch (error) {
        console.log(error);
    }
}

export const customerSignin = (formData,history) => async (dispatch) => {
    try {
        const {data} = await api.customerSignin(formData);
        console.log(data);
        dispatch({type: AUTH,payload:data});
        history.push('/');
    } catch (error) {
        console.log(error);
        
    }
}
export const managerSignup = (formData,history) => async (dispatch) => {
    try {
        const {data} = await api.managerSignUp(formData, history);
        console.log(data);
        dispatch({type:AUTH,payload: data});
        history.push('/');
    } catch (error) {
        console.log(error);
    }
}