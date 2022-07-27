import { GET_ITEMS } from "../constants";

const itemReducer = (state=[],action) => {
    switch(action.type)
    {
        case GET_ITEMS:
            console.log(action.payload);
            return action.payload;
        
        default:
            return state;
    }
}
export default itemReducer;