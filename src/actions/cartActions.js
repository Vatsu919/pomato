import { ADD_TO_CART, ADJUST_QTY, REMOVE_FROM_CART } from "../constants"

export const addToCart = (item) => {
    console.log("inside add to cart action");
    return {
        type: ADD_TO_CART,
        payload: {
            item: item
        }
    }
}

export const removeFromCart = (item) => {
    return {
        type: REMOVE_FROM_CART,
        payload: {
            item: item
        }
    }
}

export const adjustQty = (item,value) => {
    return {
        type: ADJUST_QTY,
        payload: {
            item: item,
            qty: value
        }
    }
}