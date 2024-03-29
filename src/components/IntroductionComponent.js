import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Headshot from '../img/Brian_Headshot_Square.JPG';

export default function Introduction() {
    
    return (
        <Container className='text-center' style={{ marginTop: 100, marginBottom: 200 }}>
            <Row className='justify-content-center'>
                <Col xs={12} md={8} lg={6} xl={4}>
                    <img
                        src={Headshot}
                        alt='Brian headshot'
                        height='200'
                        className='rounded-circle'
                    />
                    <h4 className='mt-4'>Hi, my name is</h4>
                    <h1>Brian Jun</h1>
                    <p className='fs-5 mb-4'>I am a software engineer seeking a full-stack developer role with knowledge in the MERN stack (MongoDB, Express.js, React.js, Node.js) along with Javascript, HTML and CSS.</p>
                    <Button 
                        href='/#about'  // change this to another id tag in the DOM
                        variant='outline-dark' 
                        size='lg'
                    >
                        Learn More
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}