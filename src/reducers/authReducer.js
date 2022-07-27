import { AUTH, LOGOUT, SIGNUP } from "../constants";

const authReducer = (state = {authData: null,isLoggedIn: false},action) => {
    switch(action.type)
    {
        case AUTH:
            localStorage.setItem('profile',JSON.stringify({...action.payload.result}));
            console.log(action);
            return {...state, authData: action.payload,isLoggedIn: true};
        
        case SIGNUP:
            return state;

        case LOGOUT:
            localStorage.removeItem('profile');
            return {authData:null,isLoggedIn:false};

        default:
            return state;
    }
}

export default authReducer;