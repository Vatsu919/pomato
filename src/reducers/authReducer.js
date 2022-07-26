import { AUTH, LOGOUT, SIGNUP } from "../constants";

const authReducer = (state = {authData: null},action) => {
    switch(action.type)
    {
        case AUTH:
            localStorage.setItem('profile',JSON.stringify({...action?.data}));
            console.log(action);
            return {...state, authData: action.payload.result};
        
        case SIGNUP:
            return state;

        case LOGOUT:
            localStorage.removeItem('profile');
            return {authData:null};

        default:
            return state;
    }
}

export default authReducer;