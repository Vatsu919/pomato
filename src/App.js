import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomerAuthForm from './components/CustomerAuthForm';
import { Route, Routes} from 'react-router-dom';
import ManagerAuthForm from './components/ManagerAuthForm/ManagerAuthForm';


function App() {
  return (
    <>
       
        <ManagerAuthForm />
        <Routes>
          <Route path='/customerAuth' element={<CustomerAuthForm />} />
          <Route path='/restaurantManagerAuth' element={<ManagerAuthForm />} />
        </Routes>
      
    </>
  );
}

export default App;
