import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const CustomerAuthForm = () => {
    return ( 
        <div class="container col-sm-6 col-md-4 border rounded-2 mt-5 text-center">
        <Form>
            <legend>Customer Signup</legend>

            <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Contact No.</Form.Label>
                <Form.Control type="text" placeholder="Enter Contact Number" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter Password" />
            </Form.Group>
            <Button variant="primary" className="mb-3">Signin</Button>
        </Form>
        </div>
     );
}
 
export default CustomerAuthForm;