import { GET_ALL_RESTAURANTS } from "../constants";

const restaurantsReducer = (state=[],action) => {
    switch(action.type)
    {
        case GET_ALL_RESTAURANTS:
            console.log(action.payload);
            return action.payload;

        default:
            return state;
    }
}

export default restaurantsReducer;