import React from 'react';
import { Card, Container, Form, Row, Col } from 'react-bootstrap';
import './LogIn.css';
import google from '../../images/icons/google.png';
import facebook from '../../images/icons/fb.png'

const LogIn = () => {
    return (
        <Container className='login-section'>
            <Row className='d-flex justify-content-center'>
                <Col xs={12} sm={8} md={6} lg={5} xl={4} xxl={3}>
                    <Card className='login-card'>
                        <Card.Body>
                            <h5 style={{fontWeight: '700', marginLeft: '2%'}}>Login</h5>
                            <Form className='login-form'>
                                <Form.Group className="mb-3">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" name='email' placeholder="Enter your email" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" name='password' placeholder="Enter password" />
                                </Form.Group>
                                <div class="d-grid gap-2">
                                    <button className="login-btn" type="submit">Log in</button>
                                </div>
                            </Form>
                            <p className='text-center small-action' style={{color: '#F9A51A'}}>Forgot password</p>
                            <p className='text-center small-action'>Don't have an account? <span style={{color: '#F9A51A'}}>Create an account</span></p>
                        </Card.Body>
                    </Card>
                    <br />
                    <p className='small-action text-center'>Or</p>
                    <br />
                    <div className="d-flex justify-content-center">
                        <div className='d-flex align-items-center aux-btn'>
                            <img src={google} id='google-img' alt="" />
                            <p className='aux-btn-text'>Continue with Google</p>
                        </div>
                    </div>
                    <br />
                    <div className="d-flex justify-content-center">
                        <div className='d-flex align-items-center aux-btn'>
                            <img src={facebook} id='fb-img' alt="" />
                            <p className='aux-btn-text'>Continue with Facebook</p>
                        </div>
                    </div>
                </Col>
            </Row>
            <br /><br /><br /><br />
        </Container>
    );
};

export default LogIn;