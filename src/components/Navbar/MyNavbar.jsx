import React from 'react';
import {useDispatch} from 'react-redux';
import { LOGOUT } from '../../constants';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {createBrowserHistory} from 'history';

const MyNavbar = () => {
    const dispatch = useDispatch();
    const history = createBrowserHistory();
    return ( 
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Pomato</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#features">Previous Orders</Nav.Link>
                    <Nav.Link onClick={() => {dispatch({type:LOGOUT});history.push('/') }} href="">Logout</Nav.Link>
                    
                </Nav>
                <Nav>
                    <Nav.Link href="#deets">More deets</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                    Dank memes
                    </Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
     );
}
 
export default MyNavbar;