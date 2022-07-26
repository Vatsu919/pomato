import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FloatingLabel } from 'react-bootstrap';


const CustomerAuthForm = () => {
    return ( 
        <div class="container col-sm-6 col-md-4 border rounded-2 mt-5">
        <Form>
            <legend>Customer Signup</legend>

            <FloatingLabel controlId="floatingInput" label="Name" className="mb-3">
                <Form.Control type="name" placeholder="Enter name" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                <Form.Control type="text" placeholder="Enter Email address" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingInput" label="Contact Number" className="mb-3">
                <Form.Control type="text" placeholder="Enter Contact Number" />
            </FloatingLabel>
            
            <FloatingLabel controlId="floatingInput" label="Password" className="mb-3">
                <Form.Control type="password" placeholder="Enter Password" />
            </FloatingLabel>
            <div className='text-center'>
                <Button variant="primary" className="mb-3">Signin</Button>
            </div>
        </Form>
        </div>
     );
}
 
export default CustomerAuthForm;