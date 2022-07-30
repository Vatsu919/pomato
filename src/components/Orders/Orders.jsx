import React,{useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { getManagerOrders, getOrders, viewAllOrders } from '../../actions/orderActions.js';

import Order from './Order.jsx';
import Pomato from '../pomato.png';
import Image from 'react-bootstrap/Image'
import AdminNavbar from '../Navbar/AdminNavbar.jsx';
import MyNavbar from '../Navbar/MyNavbar.jsx';
import Loading from '../Loading/Loading.jsx';

const Orders = () => {
    
    const user = useSelector(state => state.user);
    const orders = useSelector(state => state.orders);
    const dispatch = useDispatch();
    console.log(orders);
    
    
    useEffect(() => {
        if(user?.authData)
        {
            console.log("Userrr:",user);
            if(user.authData.role==="customer")
            {
                dispatch(getOrders(user?.authData?.userId));
            }
            else if(user?.authData?.role==="manager")
            {
                console.log(user?.authData?.restaurantId);
                dispatch(getManagerOrders(user?.authData?.restaurantId,user?.authData?.userId));
            }
            else
            {
                console.log("hereeeee")
                dispatch(viewAllOrders());
            }
        }
    }, [user]);
    return ( 
        <>
        {(user?.authData?.role==='admin')?<AdminNavbar /> : <MyNavbar />}
        <div className='container w-50'>
            <h1>Orders</h1>
            {(orders.length>0)?orders.map(order => {return <Order order = {order} />}):(<Loading />)}
            
        </div>
        </>
     );
}
 
export default Orders;