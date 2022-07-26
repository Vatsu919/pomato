import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomerAuthForm from './components/CustomerAuthForm';
import { Route, Routes} from 'react-router-dom';


function App() {
  return (
    <>
       
       
        <Routes>
          <Route path='/customerAuth' element={<CustomerAuthForm />} />
        </Routes>
      
    </>
  );
}

export default App;
