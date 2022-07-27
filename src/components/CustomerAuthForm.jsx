import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FloatingLabel } from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import { customerSignin, customerSignup } from '../actions/authActions.js';
import { createBrowserHistory } from 'history';
import App from '../App.js';


const CustomerAuthForm = () => {

    const [isLogin,setIsLogin] = useState(true);
    const history = createBrowserHistory();
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);

    const [formData,setFormData] = useState({
        name: '',
        contactNumber: '',
        email: '',
        password: '',
        role: 'customer'
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Formdata : ",formData);
        if(isLogin)
        {
            dispatch(customerSignin(formData,history));
        }
        else
        {
            dispatch(customerSignup(formData,history));            
        }
        setFormData({
            name: '',
            contactNumber: '',
            email: '',
            password: '',
            role: 'Customer'
        })
    }
    const handleToggle = () => {
        setIsLogin(!isLogin);
    }
    return user.isLoggedIn ? (<App />) : ( 
        <div className="container col-sm-6 col-md-4 border rounded-2 mt-5 bg-light"  >
        <Form>
            <legend className='fs-1 fw-semibold m-2'>Customer {isLogin ? "Login":"Signup"}</legend>

            {!isLogin &&
                <FloatingLabel controlId="floatingInput" label="Name" className="mb-3">
                <Form.Control type="text" name="name" placeholder="Enter name" onChange={(e) => setFormData({...formData,name:e.target.value})} required />
                </FloatingLabel>
            }
            <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                <Form.Control type="text" name="email" placeholder="Enter Email address"  onChange={(e) => setFormData({...formData,email:e.target.value})} required />
            </FloatingLabel>
            {!isLogin &&
                <FloatingLabel controlId="floatingInput" label="Contact Number" className="mb-3">
                <Form.Control type="text" name="contactnumber" placeholder="Enter Contact Number"  onChange={(e) => setFormData({...formData,contactNumber:e.target.value})} required />
                </FloatingLabel>
            
            }
            
            <FloatingLabel controlId="floatingInput" label="Password" className="mb-3">
                <Form.Control type="password" name="password" placeholder="Enter Password"  onChange={(e) => setFormData({...formData,password:e.target.value})} required />
            </FloatingLabel>
            <div className='text-center'>
                <Button variant="primary" className="mb-3" onClick={handleSubmit}>{(isLogin)?"Login":"Signup"}</Button>
            </div>
            <div className="text-primary mb-2 float-end" style = {{cursor: "pointer"}} onClick={handleToggle}>{(isLogin)?"Create a new account?":"Already have an account?sign in"}</div>
        </Form>
        </div>
     );
}
 
export default CustomerAuthForm;