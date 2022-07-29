import { DESELECT_ITEM, SELECT_ITEM } from "../constants";

const selectedItemReducer = (state=null,action) => {
    switch(action.type)
    {
        case SELECT_ITEM:
            return action.payload;

        case DESELECT_ITEM:
            return null;
        
        default:
            return state;
    }
}

export default selectedItemReducer;