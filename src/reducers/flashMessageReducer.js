import { FLASH_MESSAGE, REMOVE_FLASH_MESSAGE } from "../constants";

const flashMessageReducer = (state={display:false},action) => {
    switch(action.type)
    {
        case FLASH_MESSAGE:
            console.log("called");
            return {display:true};

        case REMOVE_FLASH_MESSAGE:
            return {display:false};
        
        default:
            return state;
    }
}

export default flashMessageReducer;