import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomerAuthForm from './components/CustomerAuthForm';
import { Route, Routes} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import ManagerAuthForm from './components/ManagerAuthForm/ManagerAuthForm';
import Home from './components/Home/Home';
import { useEffect } from 'react';
import { getRestaurants } from './actions/restaurantActions.js';
import { AUTH, LOGOUT, REMOVE_FLASH_MESSAGE } from './constants';
import { Button } from 'react-bootstrap';
import CustomerHome from './components/Home/CustomerHome';
import RestaurantDetails from './components/Restaurant/RestaurantDetails';
import Orders from './components/Orders/Orders';
import Cart from './components/Cart/Cart';
import ActionAlert from './components/ActionAlert/ActionAlert';
import {useNavigate} from 'react-router-dom';



function App() {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  console.log(user);
  console.log(user.isLoggedIn);
  const flash = useSelector(state=>state.flash)
  const history = useNavigate();

  useEffect(()=> {
    if(localStorage.getItem('profile'))
    {
       let data = JSON.parse(localStorage.getItem('profile'));
       data = data.authData;
       dispatch({type:AUTH,payload:data});
    }
    dispatch(getRestaurants());
  },[localStorage.getItem('profile')]);
  
  const handleClick = () => {
    dispatch({type:LOGOUT});
    history.push('/');

  }
  if(flash.display)
  {
    window.setTimeout(() => {
      dispatch({type: REMOVE_FLASH_MESSAGE});
    },2000)
  }
  return (
    <>
       
        <ActionAlert />
        <Routes>
          <Route exact path='/' element={(user.isLoggedIn)?<Home />:<CustomerAuthForm />} />
          <Route exact path='/customerAuth' element={<CustomerAuthForm />} />
          <Route exact path='/managerAuth' element={<ManagerAuthForm />} />
          <Route exact path='/restaurants' element={<CustomerHome />} />
          <Route exact path='/restaurant/:restaurantId/details' element={<RestaurantDetails />} />
          <Route exact path='/orders' element={<Orders />} />
          <Route exact path='/cart' element={<Cart />} />
        </Routes>

        {/* <Button onClick={handleClick}>logout</Button> */}
      
    </>
  );
}

export default App;
