import { GET_CUSTOMER_ORDERS } from "../constants";

const ordersReducer = (state=[],action) => {
    switch(action.type)
    {
        case GET_CUSTOMER_ORDERS:
            console.log(action.payload);
            return action.payload;
        
        default:
            return state;
    }
}
export default ordersReducer;