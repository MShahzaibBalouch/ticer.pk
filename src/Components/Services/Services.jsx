import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Services.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import slider2 from '../Images/Courses/full-stack-development.jpg';
import slider3 from '../Images/slideshow/full-slide-5.jpg';
import slider4 from '../Images/slideshow/slide-1.jpg';
import slider5 from '../Images/slideshow/slide-2.jpg';
import slider6 from '../Images/slideshow/slide-3.jpg';
export default function Services() {
    return (
        <div>
            <Container>
                <Row  style={{paddingTop:'50px', width:'100%'}}>
                    <Col md={3} >
                        <Card style={{ width: '15rem', height:'400px' }}>
                            <Card.Img variant="top" style={{backgroundSize:'cover'}} src={slider2} />
                            <Card.Body>
                                <Card.Title className='card-title'><b>Full Stack Development</b></Card.Title>
                                <Card.Text className='card-title'>
                                    HTML5, CSS3, Bootstrap5, Javascript (ES6), React JS, Node JS, PHP, MongoDB
                                    <br />
                                    Fee: <span>pkr 5000/-</span>
                                </Card.Text>
                                <Button variant="primary" className='btn-Enrrolle'>Enrrolle Now</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card style={{width: '15rem', height:'400px'  }}>
                            <Card.Img variant="top" style={{backgroundSize:'cover'}} src={slider2} />
                            <Card.Body>
                                <Card.Title className='card-title'><b>Graphic Designing</b></Card.Title>
                                <Card.Text className='card-title'>
                                HTML5, CSS3, Bootstrap5, Javascript (ES6), React JS, Node JS, PHP, MongoDB
                                    <br />
                                    Fee: <span>pkr 5000/-</span>
                                </Card.Text>
                                <br />
                                <Button variant="primary" className='btn-Enrrolle' style={{marginTop:'22px'}}>Enrrolle Now</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card style={{ width: '15rem', height:'400px' }}>
                            <Card.Img variant="top" style={{backgroundSize:'cover'}} src={slider2} />
                            <Card.Body>
                                <Card.Title className='card-title'><b>Digital Marketing</b></Card.Title>
                                <Card.Text className='card-title'>
                                HTML5, CSS3, Bootstrap5, Javascript (ES6), React JS, Node JS, PHP, MongoDB
                                    <br />
                                    Fee: <span>pkr 5000/-</span>
                                </Card.Text>
                                <br />
                                <Button variant="primary" className='btn-Enrrolle'>Enrrolle Now</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>

                        <Card style={{ width: '15rem', height:'400px' }}>
                            <Card.Img variant="top" style={{backgroundSize:'cover'}} src={slider2} />
                            <Card.Body>
                                <Card.Title className='card-title'><b>Mobile App Development</b></Card.Title>
                                <Card.Text className='card-title'>
                                HTML5, CSS3, Bootstrap5, Javascript (ES6), React JS, Node JS, PHP, MongoDB
                                    <br />
                                    Fee: <span>pkr 5000/-</span>
                                </Card.Text>
                                <Button variant="primary" className='btn-Enrrolle'>Enrrolle Now</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div >
    )
}
