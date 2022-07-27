import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomerAuthForm from './components/CustomerAuthForm';
import { Route, Routes} from 'react-router-dom';
import {useSelector} from 'react-redux';
import ManagerAuthForm from './components/ManagerAuthForm/ManagerAuthForm';
import Home from './components/Home/Home';


function App() {
  const user = useSelector(state => state.user);
  console.log(user);
  console.log(user.isLoggedIn);
  return (
    <>
       
        
        <Routes>
          <Route exact path='/' element={(user.isLoggedIn)?<Home />:<CustomerAuthForm />} />
          <Route exact path='/customerAuth' element={<CustomerAuthForm />} />
          <Route exact path='/managerAuth' element={<ManagerAuthForm />} />
        </Routes>
      
    </>
  );
}

export default App;
