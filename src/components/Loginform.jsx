import {Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { FloatingLabel } from 'react-bootstrap';
import './l.css'


function Loginform() {

    let f = (
        <Form> 
            <legend className='text-center mt-3 mb-3'>LOGIN</legend>

            <FloatingLabel controlId="floatingInput" label="Email address" className="mb-4">
                <Form.Control type="text" placeholder="Enter Email address"  required='true'/>
            </FloatingLabel>
            
            <FloatingLabel controlId="floatingInput" label="Password" className="mb-4">
                <Form.Control type="password" placeholder="Enter Password" required='true' />
            </FloatingLabel>
            <div className='text-center'>
                <Button variant="success" className="mb-3">LOGIN</Button>
            </div>
        </Form> 

    );
    return (
        <>
        <div className='container col-sm-4 col-md-4 shadow border box '>
            {f}
            <div className='text-end pb-3'>
                <a href="www.google.com">forgot password</a>
            </div>
        </div>
        <div className="text-center mt-3">
            New Foodie ? <a href='www.youtube.com'>Create Account</a>
        </div>
        </>
     
          
            
     );
}

export default Loginform;