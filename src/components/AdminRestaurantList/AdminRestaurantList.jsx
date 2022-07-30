import React from 'react';
import { useSelector } from 'react-redux';
import Loading from '../Loading/Loading';
import AdminNavbar from '../Navbar/AdminNavbar';
import AdminRestaurant from '../Restaurant/AdminRestaurant';

const AdminRestaurantList = () => {
    const restaurants = useSelector(state => state.restaurants);
    return ( 
        <>
            <AdminNavbar />
            {(restaurants?.allRestaurant?.length>0)?restaurants.allRestaurant.map(robj => <AdminRestaurant robj={robj} />):<Loading />}
        </>
     );
}
 
export default AdminRestaurantList;