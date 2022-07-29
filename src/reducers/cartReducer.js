import { ADD_TO_CART, ADJUST_QTY, CLEAR_CART, REMOVE_FROM_CART } from "../constants";

const cartReducer = (state = [],action) => {
    
    switch(action.type)
    {
        case ADD_TO_CART:
            const inCart = state.find(item => item.itemId === action.payload.item.itemId) ? true:false;
            console.log("state is:",state);
            console.log("in cart:",inCart);
            console.log("Item",action.payload.item);
            
            if(state.length>0 && action.payload.item.restaurantId!==state[0].restaurantId)
            {
                return [{...action.payload.item,quantity:1}];
            }

            return (inCart)?state.map(item => (item.itemId===action.payload.item.itemId)?{...item,quantity:item.quantity+1}:item):[...state,{...action.payload.item,quantity:1}];
        
        case REMOVE_FROM_CART:
            return state.filter(item => item.itemId !== action.payload.item.itemId);

        case ADJUST_QTY:
            return state.map(item => (item.itemId===action.payload.item.itemId)?{...item,quantity:action.payload.quantity}:item);

        case CLEAR_CART:
            return [];

        default:
            console.log(state);
            return state;
    }
}

export default cartReducer;