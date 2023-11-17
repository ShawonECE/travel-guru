import React, { useContext } from 'react';
import './Stay.css';
import { Card, Col, Container, Row } from 'react-bootstrap';
import img1 from '../../images/Rectangle 26.png';
import img2 from '../../images/Rectangle 27.png';
import img3 from '../../images/Rectangle 28.png';
import { DestinationContext } from '../../App';
import star from '../../images/icons/star_1_.png';


const Stay = () => {
    const [destinationInfo] = useContext(DestinationContext);
    
    return (
        <Container className='stay'>
            <Row>
                <Col sm={6}>
                    <p className='small'>252 stays {destinationInfo.startDate} to {destinationInfo.endDate}</p>
                    <p className='large'>Stays in {destinationInfo.destination}</p>
                    <Card className='stay-card'>
                        <Row>
                            <Col xs={12} sm={6}>
                                <Card.Img src={img1} />
                            </Col>
                            <Col xs={12} sm={6}>
                                <p className='stay-title'>Light, bright, airy, stylish & peaceful stay</p>
                                <p className='stay-detail'>4 guests &nbsp; 2 bedrooms &nbsp; 2 beds &nbsp; 2 baths</p>
                                <p className='stay-detail'>Wifi &nbsp; Air conditioning &nbsp; Kitchen</p>
                                <p className='stay-detail'>Cancellation facility available</p>
                                <div className="d-flex stay-footer">
                                    <img src={star} alt="" className='star' />
                                    <p className='rating'>4.9 (20)</p>
                                    <p className='price'>$47/night</p>
                                </div>
                            </Col>
                        </Row>
                    </Card>
                    <Card className='stay-card'>
                        <Row>
                            <Col xs={12} sm={6}>
                                <Card.Img src={img2} />
                            </Col>
                            <Col xs={12} sm={6}>
                                <p className='stay-title'>Apartment in Lost Panaroma</p>
                                <p className='stay-detail'>4 guests &nbsp; 2 bedrooms &nbsp; 2 beds &nbsp; 2 baths</p>
                                <p className='stay-detail'>Wifi &nbsp; Air conditioning &nbsp; Kitchen</p>
                                <p className='stay-detail'>Cancellation facility available</p>
                                <div className="d-flex stay-footer">
                                    <img src={star} alt="" className='star' />
                                    <p className='rating'>4.8 (27)</p>
                                    <p className='price'>$34/night</p>
                                </div>
                            </Col>
                        </Row>
                    </Card>
                    <Card className='stay-card'>
                        <Row>
                            <Col xs={12} sm={6}>
                                <Card.Img src={img3} />
                            </Col>
                            <Col xs={12} sm={6}>
                                <p className='stay-title'>Light, bright, airy, stylish & peaceful stay</p>
                                <p className='stay-detail'>4 guests &nbsp; 2 bedrooms &nbsp; 2 beds &nbsp; 2 baths</p>
                                <p className='stay-detail'>Wifi &nbsp; Air conditioning &nbsp; Kitchen</p>
                                <p className='stay-detail'>Cancellation facility available</p>
                                <div className="d-flex stay-footer">
                                    <img src={star} alt="" className='star' />
                                    <p className='rating'>4.9 (20)</p>
                                    <p className='price'>$52/night</p>
                                </div>
                            </Col>
                        </Row>
                    </Card>
                </Col>
                <Col sm={6}>
                    <h3 className='text-center'>Here is the map</h3>
                </Col>
            </Row>
        </Container>
    );
};

export default Stay;