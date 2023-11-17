import React from 'react';
import '../LogIn/LogIn.css';
import { Card, Col, Container, Form, Row } from 'react-bootstrap';

const SignUp = () => {
    return (
        <Container className='login-section'>
            <Row className='d-flex justify-content-center'>
                <Col xs={12} sm={8} md={6} lg={5} xl={4} xxl={3}>
                    <Card className='login-card'>
                        <Card.Body>
                            <h5 style={{fontWeight: '700', marginLeft: '2%'}}>Sign up</h5>
                            <Form className='login-form'>
                                <Form.Group className="mb-3">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" name='name' placeholder="Enter your name" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" name='email' placeholder="Enter your email" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" name='password' placeholder="Enter password" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" name='confirmPassword' placeholder="Re-enter password" />
                                </Form.Group>
                                <div class="d-grid gap-2">
                                    <button className="login-btn" type="submit">Sign up</button>
                                </div>
                            </Form>
                            <p className='text-center small-action'>Already have an account? <span style={{color: '#F9A51A'}}>Log in</span></p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <br /><br /><br /><br /><br />
        </Container>
    );
};

export default SignUp;