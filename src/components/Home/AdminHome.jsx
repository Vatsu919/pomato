import React from 'react';
import { useSelector } from 'react-redux';
import AdminNavbar from '../Navbar/AdminNavbar';
import AdminRestaurant from '../Restaurant/AdminRestaurant';
import Plogo from '../Navbar/pomatologo.png';

const AdminHome = () => {
    const restaurants = useSelector(state => state.restaurants);
    return ( 
        <>
            <AdminNavbar />
            <div className='container text-center'>
                <div><img src={Plogo} className="w-25 h-25 mt-5" /></div>
                <div><span className='fs-1' style={{color: '#baff09'}}>Welcome! Admin</span></div>
           </div>
        </>
     );
}
 
export default AdminHome;