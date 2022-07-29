import React from 'react';
import { useSelector } from 'react-redux';
import Restaurant from '../Restaurant/Resturant';

const ManagerHome = () => {
    const user = useSelector( state=> state.user);
    const restaurants = useSelector(state => state.restaurants);
    const restaurant = restaurants?.allRestaurant?.find(robj => robj.userId===user.authData.userId);
    return ( 
        <div className="container w-50">
        {restaurant?<Restaurant robj={restaurant} />:"Loading"}
        </div>
     );
}
 
export default ManagerHome;