import { FLASH_MESSAGE, REMOVE_FLASH_MESSAGE } from "../constants";

const flashMessageReducer = (state={display:false,message: null,type:null},action) => {
    switch(action.type)
    {
        case FLASH_MESSAGE:
            return action.payload;

        case REMOVE_FLASH_MESSAGE:
            return {display:false,message:null,type:null};
        
        default:
            return state;
    }
}

export default flashMessageReducer;