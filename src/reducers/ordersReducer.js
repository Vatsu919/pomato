import { GET_ALL_ORDERS, GET_CUSTOMER_ORDERS, GET_MANAGER_ORDERS, PLACE_ORDER } from "../constants";

const ordersReducer = (state=[],action) => {
    switch(action.type)
    {
        case GET_CUSTOMER_ORDERS:
            console.log(action.payload);
            return action.payload;
        
        case PLACE_ORDER:
            console.log(action.payload);
            return state;

        case GET_MANAGER_ORDERS:
            console.log(action.payload);
            return action.payload;

        case GET_ALL_ORDERS:
            console.log(action.payload);
            return action.payload;
        default:
            return state;
    }
}
export default ordersReducer;