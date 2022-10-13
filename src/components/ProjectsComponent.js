import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NFLScreenshot from '../img/NFL-Pickems-Screenshot.png';
import CastingCardsScreenshot from '../img/Casting-Cards-Screenshot.png';
import RecipeScreenshot from '../img/Recipe-Screenshot.png';


export default function Projects() {

    return (
        <Container>
            <Row className='justify-content-center' style={{ textAlign: 'center' }}>
                <Col xs={12} lg={8} className='border-secondary border-top'>
                    <h1>Projects</h1>
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <Col xs={12} lg={8}>
                    <h2>NFL Pick'ems Score Tracker App</h2>
                    <p>Automatically gathers results of each NFL game and computes the point totals to determine the weekly winner.</p>
                </Col>
                <Col xs={12} lg={8}>
                    <img
                        src={NFLScreenshot}
                        alt='NFL Screenshot'
                        width='100%'
                    />
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <Col xs={12} lg={8}>
                    <h2>Casting Cards App</h2>
                    <p>A tool casting departments can use to create a grid of prospective contestants more efficiently.</p>
                </Col>
                <Col xs={12} lg={8}>
                    <img
                        src={CastingCardsScreenshot}
                        alt='NFL Screenshot'
                        width='100%'
                    />
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <Col xs={12} lg={8}>
                    <h2>Recipe App</h2>
                    <p>A minimalist and customizable recipe app that allows users to create and save their own recipes</p>
                </Col>
                <Col xs={12} lg={8}>
                    <img
                        src={RecipeScreenshot}
                        alt='NFL Screenshot'
                        width='100%'
                    />
                </Col>
            </Row>
        </Container>
    );
}