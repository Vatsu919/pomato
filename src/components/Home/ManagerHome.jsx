import React from 'react';
import { useSelector } from 'react-redux';
import MyNavbar from '../Navbar/MyNavbar';
import Restaurant from '../Restaurant/Resturant';

const ManagerHome = () => {
    const user = useSelector( state=> state.user);
    const restaurants = useSelector(state => state.restaurants);
    const restaurant = restaurants?.allRestaurant?.find(robj => robj.userId===user.authData.userId);
    return ( 
        <>
        <MyNavbar />
        <div className="container w-50 m-2">
        {restaurant?<Restaurant robj={restaurant} />:"Loading"}
        </div>
        </>
     );
}
 
export default ManagerHome;