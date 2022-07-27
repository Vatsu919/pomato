import React from 'react';
import { useSelector } from 'react-redux';
import CustomerHome from './CustomerHome';


const Home = () => {
    const user = useSelector(state => state.user);
    return (
        <>
        {(user?.authData?.role==='Customer')?<CustomerHome />:<h1>Manager home</h1>}
        </> 
        
     );
}
 
export default Home;