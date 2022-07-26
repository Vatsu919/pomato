import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FloatingLabel } from 'react-bootstrap';
import { useState } from 'react';

const ManagerAuthForm = () => {
    const [isLogin,setIsLogin] = useState(false);
    const [formData,setFormData] = useState({
        name: '',
        contactnumber: '',
        email: '',
        password: '',
        restaurantname: '',
        restaurantimage: ''

    });

    const handleChange = (e) => {
        console.log(e.target.files[0]);
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
    
        
        reader.onload = () => {
          console.log(reader.result);
          setFormData({...formData,restaurantimage: reader.result});
        }
    }
    
    return ( 
        <div className="container col-sm-6 col-lg-4 border rounded-2 mt-5 bg-light"  >
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
                <Form.Control type="text" name="contactnumber" placeholder="Enter Contact Number"  onChange={(e) => setFormData({...formData,contactnumber:e.target.value})} required />
                </FloatingLabel>
            
            }
            
            <FloatingLabel controlId="floatingInput" label="Password" className="mb-3">
                <Form.Control type="password" name="password" placeholder="Enter Password"  onChange={(e) => setFormData({...formData,password:e.target.value})} required />
            </FloatingLabel>

            {!isLogin &&
                <FloatingLabel controlId="floatingInput" label="Restaurant Name" className="mb-3">
                <Form.Control type="text" name="restaurantname" placeholder="Enter Restaurant name" onChange={(e) => setFormData({...formData,restaurantname:e.target.value})} required />
                </FloatingLabel>
            }
            {!isLogin &&
                <FloatingLabel controlId="floatingInput" label="Restaurant Address" className="mb-3">
                <Form.Control as="textarea" name="restaurantaddress" placeholder="Enter Restaurant Address" onChange={(e) => setFormData({...formData,restaurantaddress:e.target.value})} required />
                </FloatingLabel>
            }
            {!isLogin &&
                <Form.Group className="mb-3" controlId="formBasicFile">
                    <Form.Label>File</Form.Label>
                    <Form.Control type="file" onChange={handleChange} />
                </Form.Group>
            }
            <div className='text-center'>
                <Button variant="primary" className="mb-3" onClick={() => {console.log(formData)}}>{(isLogin)?"Login":"Signup"}</Button>
            </div>
            <div className="text-primary mb-2 float-end" style = {{cursor: "pointer"}} onClick={() => setIsLogin(!isLogin)}>Already have an account?sign in</div>
        
        </Form>
        </div>
     );
}
 
export default ManagerAuthForm;