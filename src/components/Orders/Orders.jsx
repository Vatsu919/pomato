import React,{useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { getOrders } from '../../actions/orderActions.js';

const Orders = () => {
    
    const user = useSelector(state => state.user);
    const orders = useSelector(state => state.orders);
    const dispatch = useDispatch();
    useEffect(() => {
        if(user?.authData)
        {
            console.log("Userrr:",user);
            dispatch(getOrders(user?.authData?.userId));
        }
    }, [user]);
    return ( 
        <h1>Orders</h1>
     );
}
 
export default Orders;