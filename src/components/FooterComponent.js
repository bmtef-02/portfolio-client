import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Footer() {

    return (
        <Container id='contact' fluid>
            <Row className='justify-content-between align-items-center border-top border-2 mt-5 p-5'>
                <Col xs={12} sm={6}className='text-start'>
                    <Row>
                        <Col xs={12} className='text-secondary fs-5'>Brian Jun</Col>
                        <Col xs={12}>
                            <a href='mailto:brianjun010@gmail.com' className='text-decoration-none'>brianjun010@gmail.com</a>
                        </Col>
                    </Row>
                </Col>
                <Col xs={12} sm={6} className='text-end fs-2'>
                    <a href='mailto:brianjun010@gmail.com' target='_blank' className='text-black'>
                        <i className='bi bi-envelope-fill px-2' />
                    </a>
                    <a href='http://www.linkedin.com/in/bjun' target='_blank' className='text-black'>
                        <i className='bi bi-linkedin px-2' />
                    </a>
                    <a href='https://github.com/bmtef-02' target='_blank' className='text-black'>
                        <i className="bi bi-github ps-2" />
                    </a>
                </Col>
            </Row>
        </Container>
    );
}