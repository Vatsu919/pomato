import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FloatingLabel } from 'react-bootstrap';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { customerSignin, managerSignup } from '../../actions/authActions.js';
import { createBrowserHistory } from 'history';
import { Navigate } from 'react-router-dom';
import App from '../../App.js';


const ManagerAuthForm = () => {
    const [isLogin,setIsLogin] = useState(false);
    const [formData,setFormData] = useState({
        name: '',
        contactNumber: '',
        email: '',
        password: '',
        restaurantName: '',
        restaurantAddress: '',
        restaurantImage: '',
        role: 'manager'

    });
    const dispatch = useDispatch();
    const history = createBrowserHistory();
    const user = useSelector(state => state.user);

    

    const handleChange = (e) => {
        console.log(e.target.files[0]);
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
    
        
        reader.onload = () => {
         // console.log(reader.result);
          setFormData({...formData,restaurantImage: reader.result});
        }
    }

    const handleClick = (e) => {
        e.preventDefault();
        console.log(formData);
        if(isLogin)
        {
            dispatch(customerSignin(formData,history));
        }
        else
        {
            dispatch(managerSignup(formData,history));
        }
        setFormData({
            name: '',
            contactNumber: '',
            email: '',
            password: '',
            restaurantName: '',
            restaurantAddress: '',
            restaurantImage: '',
            role: 'manager'
        })
    }

    const handleToggle = (e) => {
        setIsLogin(!isLogin);
    }
    
    return user.isLoggedIn?(<App />):( 
        <div className="container col-sm-6 col-lg-4 border rounded-2 mt-5 bg-light"  >
        <Form>
            <legend className='fs-1 fw-semibold m-2'>Restaurant Manager {isLogin ? "Login":"Signup"}</legend>

            {!isLogin &&
                <FloatingLabel controlId="floatingInput" label="Name" className="mb-3">
                <Form.Control type="text" name="name" value={formData.name} placeholder="Enter name" onChange={(e) => setFormData({...formData,name:e.target.value})} required />
                </FloatingLabel>
            }
            <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                <Form.Control type="text" name="email" value={formData.email} placeholder="Enter Email address"  onChange={(e) => setFormData({...formData,email:e.target.value})} required />
            </FloatingLabel>
            {!isLogin &&
                <FloatingLabel controlId="floatingInput" label="Contact Number" className="mb-3">
                <Form.Control type="text" name="contactnumber" value={formData.contactNumber} placeholder="Enter Contact Number"  onChange={(e) => setFormData({...formData,contactNumber:e.target.value})} required />
                </FloatingLabel>
            
            }
            
            <FloatingLabel controlId="floatingInput" label="Password" className="mb-3">
                <Form.Control type="password" name="password" value={formData.password} placeholder="Enter Password"  onChange={(e) => setFormData({...formData,password:e.target.value})} required />
            </FloatingLabel>

            {!isLogin &&
                <FloatingLabel controlId="floatingInput" label="Restaurant Name" className="mb-3">
                <Form.Control type="text" name="restaurantname" value={formData.restaurantName} placeholder="Enter Restaurant name" onChange={(e) => setFormData({...formData,restaurantName:e.target.value})} required />
                </FloatingLabel>
            }
            {!isLogin &&
                <FloatingLabel controlId="floatingInput" label="Restaurant Address" className="mb-3">
                <Form.Control as="textarea" name="restaurantaddress" value={formData.restaurantAddress} placeholder="Enter Restaurant Address" onChange={(e) => setFormData({...formData,restaurantAddress:e.target.value})} required />
                </FloatingLabel>
            }
            {!isLogin &&
                <Form.Group className="mb-3" controlId="formBasicFile">
                    <Form.Label>File</Form.Label>
                    <Form.Control type="file" onChange={handleChange} />
                </Form.Group>
            }
            <div className='text-center'>
                <Button variant="primary" className="mb-3" onClick={handleClick}>{(isLogin)?"Login":"Signup"}</Button>
            </div>
            <div className="text-primary mb-2 float-end" style = {{cursor: "pointer"}} onClick={handleToggle}>{(isLogin)?"Create a new account?":"Already have an account?sign in"}</div>
        
        </Form>
        </div>
     );
}
 
export default ManagerAuthForm;