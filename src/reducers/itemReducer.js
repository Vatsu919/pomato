import { ADD_ITEM, DELETE_ITEM, GET_ITEMS, UPDATE_ITEM } from "../constants";

const itemReducer = (state=[],action) => {
    switch(action.type)
    {
        case GET_ITEMS:
            console.log(action.payload);
            return action.payload;
        
        case ADD_ITEM:
            console.log(action.payload);
            return [action.payload,...state];

        case UPDATE_ITEM:
            console.log(action.payload)
            return state.map(item => (item.itemId===action.payload.itemId)?action.payload:item);
        case DELETE_ITEM:
            return state.filter(item => item.itemId!==action.payload);
        default:
            return state;
    }
}
export default itemReducer;