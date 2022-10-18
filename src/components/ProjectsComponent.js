import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NFLScreenshot from '../img/NFL-Pickems-Screenshot.png';
import CastingCardsScreenshot from '../img/Casting-Cards-Screenshot.png';
import RecipeScreenshot from '../img/Recipe-Screenshot.png';
import '../App.css';


export default function Projects(props) {

    const { setHash } = props;

    return (
        <Container id='projects'>
            <Row className='justify-content-center text-center'>
                <Col xs={12} lg={8} className='border-secondary border-top' style={{ paddingTop: 80 }}>
                    <h1>Projects</h1>
                </Col>
            </Row>
            <Row className='justify-content-center py-5'>
                <Col xs={12} lg={8}>
                    <Link to='/projects/nfl' onClick={() => setHash('projects-page')} className='project-link'>
                        <h3>NFL Pick'ems Score Tracker App</h3>
                        <p className='paragraph'>Automatically gathers results of each NFL game and computes the point totals to determine the weekly winner.</p>
                    </Link>
                </Col>
                <Col xs={12} lg={8}>
                    <Link to='/projects/nfl' onClick={() => setHash('projects-page')}>
                        <img
                            src={NFLScreenshot}
                            alt='NFL Screenshot'
                            width='100%'
                        />
                    </Link>
                </Col>
            </Row>
            <Row className='justify-content-center py-5'>
                <Col xs={12} lg={8}>
                    <Link to='/projects/casting' onClick={() => setHash('projects-page')} className='project-link'>
                        <h2>Casting Cards App</h2>
                        <p className='paragraph'>A tool casting departments can use to create a grid of prospective contestants more efficiently.</p>
                    </Link>
                    
                </Col>
                <Col xs={12} lg={8}>
                    <Link to='/projects/casting' onClick={() => setHash('projects-page')}>
                        <img
                            src={CastingCardsScreenshot}
                            alt='Casting Screenshot'
                            width='100%'
                        />
                    </Link>
                </Col>
            </Row>
            <Row className='justify-content-center py-5'>
                <Col xs={12} lg={8}>
                    <Link to='/projects/recipe' onClick={() => setHash('projects-page')} className='project-link'>
                        <h2>Recipe App</h2>
                        <p className='paragraph'>A minimalist and customizable recipe app that allows users to create and save their own recipes</p>
                    </Link>
                    
                </Col>
                <Col xs={12} lg={8}>
                    <Link to='/projects/recipe' onClick={() => setHash('projects-page')}>
                        <img
                            src={RecipeScreenshot}
                            alt='Recipe Screenshot'
                            width='100%'
                        />
                    </Link>
                    
                </Col>
            </Row>
        </Container>
    );
}