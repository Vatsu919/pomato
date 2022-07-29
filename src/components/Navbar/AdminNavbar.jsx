import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { LOGOUT } from '../../constants';
import { useNavigate } from 'react-router-dom';

const AdminNavbar = () => {
    const dispatch = useDispatch();
    const history = useNavigate();
    return ( 
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand><Link to="/" className='text-decoration-none text-light'>Pomato</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link><Link to="/orders" className='text-decoration-none'>All Orders</Link></Nav.Link>
                    <Nav.Link><Link to="/admin/restaurants" className='text-decoration-none'>All Restaurants</Link></Nav.Link>
                    <Nav.Link><Link to="/admin/payments" className='text-decoration-none'>All Payments</Link></Nav.Link>
                    <Nav.Link onClick={() => {dispatch({type:LOGOUT});history('/') }} href="">Logout</Nav.Link>
                    
                </Nav>
                
                </Navbar.Collapse>
            </Container>
        </Navbar>
     );
}
 
export default AdminNavbar;