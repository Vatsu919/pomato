import React from 'react';
import { useSelector } from 'react-redux';
import Item from '../Item/Item';

const Cart = () => {
    const cart = useSelector(state=>state.cart);
    console.log(cart);
    return ( 
        <>
            {(cart.length===0)?"Empty": cart.map(item => <Item item={item} />)}
        </>
     );
}
 
export default Cart;