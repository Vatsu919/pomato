import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRestaurants } from '../../actions/restaurantActions.js';
import MyNavbar from '../Navbar/MyNavbar.jsx';
import Restaurant from '../Restaurant/Resturant.jsx';
import Pomato from '../pomato.png';
import Image from 'react-bootstrap/Image'


const CustomerHome = () => {
    const restaurants = useSelector(state => state.restaurants);
    console.log(restaurants);
    return ( 
        <>
        <MyNavbar />
        <div className='container w-75'>
        <div className="d-flex flex-row flex-wrap">
        {(restaurants?.allRestaurant?.length>0)? restaurants.allRestaurant.map(restaur => <div className='m-2'> <Restaurant robj={restaur} /></div>):<Image rounded className="h-50 w-50 mx-auto" src={Pomato} />}
           
        </div>
        </div>
        </>
     );
}
 
export default CustomerHome;