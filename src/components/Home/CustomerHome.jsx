import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRestaurants } from '../../actions/restaurantActions.js';


const CustomerHome = () => {
    const restaurants = useSelector(state => state.restaurants);
    console.log(restaurants.result.length);
    return ( 
        <>
        {(restaurants.result.length>0)? restaurants.result.map(restaur => <li>{restaur.restaurantName}</li>):"not yet"}
        </>
     );
}
 
export default CustomerHome;