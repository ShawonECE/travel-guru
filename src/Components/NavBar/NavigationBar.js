import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../logo.png';
import './NavigationBar.css'
import { Form, InputGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const NavigationBar = () => {
    const navigate = useNavigate();
    const loginClick = () => {
        navigate('/login');
    };
    return (
        <Navbar expand="lg" className="bg-body-transparent">
            <Container>
                <img src={logo} width="100"
                height="46"
                className="d-inline-block align-top white-logo"
                alt="Travel Guru"/>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Form inline>
                        <Form.Control
                                placeholder="Search your destination..."
                                aria-label="destination"
                                aria-describedby="basic-addon1"
                                id='search'
                            />
                        </Form>
                        <Nav.Link className='white'>News</Nav.Link>
                        <Nav.Link className='white'>Destination</Nav.Link>
                        <Nav.Link className='white'>Blog</Nav.Link>
                        <Nav.Link className='white'>Contact</Nav.Link>
                        <button className='btn-type-one' onClick={loginClick}>Log in</button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;