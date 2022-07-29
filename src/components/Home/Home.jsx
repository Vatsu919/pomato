import React from 'react';
import { useSelector } from 'react-redux';
import AdminHome from './AdminHome';
import CustomerHome from './CustomerHome';
import ManagerHome from './ManagerHome';


const Home = () => {
    const user = useSelector(state => state.user);
    return (
        <>
        {(user?.authData?.role==='customer')?<CustomerHome />:(user?.authData?.role==='manager')?<ManagerHome />:<AdminHome />}
        </> 
        
     );
}
 
export default Home;