import React, { useState,useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { LOGOUT } from '../../constants';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {createBrowserHistory} from 'history';
import {Link } from 'react-router-dom';

const MyNavbar = () => {
    const dispatch = useDispatch();
    const history = createBrowserHistory();
    const cart = useSelector(state=>state.cart);
    const [cartCounter,setCartCounter] = useState(0);

    useEffect(() => {
        let count=0;
        cart.forEach(item => {
            count += item.qty;
        })
        setCartCounter(count);
    }, [cart]);
    return ( 
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand><Link to="/" className='text-decoration-none text-light'>Pomato</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#features">Previous Orders</Nav.Link>
                    <Nav.Link onClick={() => {dispatch({type:LOGOUT});history.push('/') }} href="">Logout</Nav.Link>
                    
                </Nav>
                <Nav>
                    <Nav.Link><Link className="btn btn-success" to ="/cart">Cart {cartCounter}</Link></Nav.Link>
                    
                    
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
     );
}
 
export default MyNavbar;