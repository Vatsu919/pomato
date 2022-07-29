import { GET_ALL_PAYMENTS } from "../constants";

const paymentReducer = (state=[],action) => {
    switch(action.type)
    {
        case GET_ALL_PAYMENTS:
            console.log(...state,action.payload);
            return action.payload;

        default:
            return state;
    }
}
export default paymentReducer;