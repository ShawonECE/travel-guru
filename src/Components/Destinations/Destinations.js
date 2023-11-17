import React, { useContext, useState } from 'react';
import './Destinations.css';
import { Card, Carousel, Col, Container, Form, Row } from 'react-bootstrap';
import Sajek from '../../images/Sajek.png';
import Sreemongol from '../../images/Sreemongol.png';
import sundorbon from '../../images/sundorbon.png';
import { places } from '../../places'
import { DestinationContext } from '../../App';
import { useNavigate } from 'react-router-dom';

const Destinations = () => {
    const navigate = useNavigate();
    const [bringForm, setBringForm] = useState(false);
    const handleBringForm = () => {
        setBringForm(true);
    };
    
    const [destinationInfo, setDestinationInfo] = useContext(DestinationContext);

    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
    };
    const handleBlur = (event) => {
        const newDestinationInfo = {...destinationInfo};
        newDestinationInfo[event.target.name] = event.target.value;
        if(!newDestinationInfo.destination) {
            newDestinationInfo.destination = places[index].name;
        }
        setDestinationInfo(newDestinationInfo);
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/staying-options');
        //console.log(destinationInfo);
    };
    return (
        <Container>
            <Row>
                <Col xs={12} sm={6}>
                    <div className='destination-detail'>
                        <h1>{places[index].name}</h1>
                        <p>{places[index].detail}</p>
                        <button className='btn-type-two' onClick={handleBringForm}><span className='d-flex align-items-center'>Booking<span className="material-symbols-outlined">arrow_right_alt</span></span></button>
                    </div>
                </Col>
                <Col xs={12} sm={6}>
                    {
                        bringForm ?
                        <Form className='booking-form' onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Origin</Form.Label>
                            <Form.Control type="text" name='origin' onBlur={handleBlur} className='input-field' placeholder="Enter your origin" required />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Destination</Form.Label>
                            <Form.Control type="text" name='destination' onBlur={handleBlur} className='input-field' value={places[index].name} />
                        </Form.Group>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>From</Form.Label>
                                    <Form.Control type="date" name='startDate' onBlur={handleBlur} className='input-field' placeholder="Start date" required />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>To</Form.Label>
                                    <Form.Control type="date" name='endDate' onBlur={handleBlur} className='input-field' placeholder="End date" required />
                                </Form.Group>
                            </Col>
                        </Row>
                        <div class="d-grid gap-2">
                            <button type='submit' className='btn-type-three'>Start Booking</button>
                        </div>
                    </Form>
                    : 
                    <Carousel className='slider' slide={true} indicators={false} activeIndex={index} onSelect={handleSelect}>
                        <Carousel.Item>
                            <Card className="bg-transparent text-white destination-card">
                                <Card.Img src={Sajek} alt="Card image" />
                                <Card.ImgOverlay className='d-flex align-items-end justify-content-center'>
                                    <h4>SAJEK VALLEY</h4>
                                </Card.ImgOverlay>
                            </Card>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Card className="bg-transparent text-white destination-card">
                                <Card.Img src={Sreemongol} alt="Card image" />
                                <Card.ImgOverlay className='d-flex align-items-end justify-content-center'>
                                    <h4>SREEMANGAL</h4>
                                </Card.ImgOverlay>
                            </Card>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Card className="bg-transparent text-white destination-card">
                                <Card.Img src={sundorbon} alt="Card image" />
                                <Card.ImgOverlay className='d-flex align-items-end justify-content-center'>
                                    <h4>SUNDARBAN</h4>
                                </Card.ImgOverlay>
                            </Card>
                        </Carousel.Item>
                    </Carousel>
                    }   
                </Col>
            </Row>
        </Container>
    );
};

export default Destinations;