import { ADD_TO_CART, ADJUST_QTY, REMOVE_FROM_CART } from "../constants";

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
                return [{...action.payload.item,qty:1}];
            }

            return (inCart)?state.map(item => (item.itemId===action.payload.item.itemId)?{...item,qty:item.qty+1}:item):[...state,{...action.payload.item,qty:1}];
        
        case REMOVE_FROM_CART:
            return state.filter(item => item.itemId !== action.payload.item.itemId);

        case ADJUST_QTY:
            return state.map(item => (item.itemId===action.payload.item.itemId)?{...item,qty:action.payload.qty}:item);

        default:
            console.log(state);
            return state;
    }
}

export default cartReducer;