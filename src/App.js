import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomerAuthForm from './components/CustomerAuthForm';
import { Route, Routes} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import ManagerAuthForm from './components/ManagerAuthForm/ManagerAuthForm';
import Home from './components/Home/Home';
import { useEffect } from 'react';
import { getRestaurants } from './actions/restaurantActions.js';
import { AUTH, LOGOUT } from './constants';
import { Button } from 'react-bootstrap';
import CustomerHome from './components/Home/CustomerHome';
import RestaurantDetails from './components/Restaurant/RestaurantDetails';
import Orders from './components/Orders/Orders';
import Cart from './components/Cart/Cart';



function App() {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  console.log(user);
  console.log(user.isLoggedIn);


  useEffect(()=> {
    if(localStorage.getItem('profile'))
    {
       const data = JSON.parse(localStorage.getItem('profile'));
       dispatch({type:AUTH,payload:data});
    }
    dispatch(getRestaurants());
  },[localStorage.getItem('profile')]);
  
  const handleClick = () => {
    dispatch({type:LOGOUT});
  }
  return (
    <>
       
  
        <Routes>
          <Route exact path='/' element={(user.isLoggedIn)?<Home />:<CustomerAuthForm />} />
          <Route exact path='/customerAuth' element={<CustomerAuthForm />} />
          <Route exact path='/managerAuth' element={<ManagerAuthForm />} />
          <Route exact path='/restaurants' element={<CustomerHome />} />
          <Route exact path='/restaurant/:restaurantId/details' element={<RestaurantDetails />} />
          <Route exact path='/customer/orders' element={<Orders />} />
          <Route exact path='/cart' element={<Cart />} />
        </Routes>

        <Button onClick={handleClick}>logout</Button>
      
    </>
  );
}

export default App;
