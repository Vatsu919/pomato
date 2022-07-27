import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomerAuthForm from './components/CustomerAuthForm';
import { Route, Routes} from 'react-router-dom';
import {useSelector} from 'react-redux';
import ManagerAuthForm from './components/ManagerAuthForm/ManagerAuthForm';
import Home from './components/Home/Home';



function App() {
  const user = useSelector(state=> state.user);
  console.log(user);
  return (
    <>
       
        
        { <Routes>
          <Route path='/' element={(user.authData)?<Home />:<CustomerAuthForm />} />
          <Route path='/customerAuth' element={<CustomerAuthForm />} />
          <Route path='/restaurantManagerAuth' element={<ManagerAuthForm />} />
        </Routes> }
     
    </>
  );
}

export default App;
