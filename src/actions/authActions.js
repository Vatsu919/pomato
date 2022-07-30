import * as api from '../api';
import { AUTH, FLASH_MESSAGE, SIGNUP } from '../constants';

export const customerSignup = (formData,history) => async (dispatch) => {
    try {
        
        const {data} = await api.customerSignup(formData);
        console.log(data);
        dispatch({type: AUTH,payload: data});
        dispatch({type:FLASH_MESSAGE,payload:{display:true,message:"Successfully logged in",type:"success"}})
        history.push('/');
        
        
    } catch (error) {
        dispatch({type:FLASH_MESSAGE,payload:{display:true,message:error.response.data.message,type:"danger"}});
        console.log(error);
    }
}

export const customerSignin = (formData,history) => async (dispatch) => {
    try {
        const {data} = await api.customerSignin(formData);
        console.log(data);
        dispatch({type: AUTH,payload:data});
        dispatch({type:FLASH_MESSAGE,payload:{display:true,message:"Successfully logged in",type:"success"}})
        history.push('/');
    } catch (error) {
        dispatch({type:FLASH_MESSAGE,payload:{display:true,message:error.response.data.message,type:"danger"}});
        console.log(error);
        
    }
}
export const managerSignup = (formData,history) => async (dispatch) => {
    try {
        const {data} = await api.managerSignUp(formData, history);
        console.log(data);
        dispatch({type:AUTH,payload: data});
        dispatch({type:FLASH_MESSAGE,payload:{display:true,message:"Successfully logged in",type:"success"}})
        history.push('/');
    } catch (error) {
        dispatch({type:FLASH_MESSAGE,payload:{display:true,message:error.response.data.message,type:"danger"}});
        console.log(error);
    }
}