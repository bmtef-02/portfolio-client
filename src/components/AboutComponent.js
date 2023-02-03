import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css';

export default function About() {

    return (
        <Container id='about' style={{ marginBottom: 100 }}>
            <Row className='justify-content-center text-center'>
                <Col xs={12} lg={8} className='border-secondary border-top' style={{ paddingTop: 80 }}>
                    <h1>About Me</h1>
                </Col>
            </Row>
            <Row className='justify-content-center mt-3'>
                <Col xs={12} lg={8}>
                    <p className='paragraph'>I would describe myself as a dedicated problem solver. My problem solving skills have allowed me to transition through different fields and will allow me to be a successful software engineer. My first transition came after graduating college with a degree in Chemistry. I decided to teach high school chemistry and physics to underserved communities through a non-profit called Teach for America. I was confident in the content, but I had to address my lack of teaching experience. I pursued a Masters in Education, and I observed and borrowed ideas from veteran teachers to make my classes more engaging and culturally competent.</p>
                        
                    <p className='paragraph'>Two years later, I made another transition to teach 7th graders robotics and 3D design. Even though I had little experience with the new age group and subject matter, I made it work by connecting with fellow engineering teachers, attending robotics and computer-aided design trainings, and taking computer science classes at a local community college.</p>

                    <p className='paragraph'>After taking computer science classes, I wanted to learn more and enrolled in Nucamp, an online coding bootcamp for full stack web and mobile development. While difficult at times, I fell in love with the challenge of learning new languages and frameworks to create my own websites and applications. Since graduating from the bootcamp, I have continued learning new tools and libraries to implement into my projects. Most recently, I’ve been collaborating with another developer to build a health care application for a physical therapy clinic, and I’ve built three projects of my own. Most importantly, I’ve been building my confidence in my ability to find the solution to any problem. I am excited to join a company where I can contribute to their goals as a full time, full-stack developer.</p>
                </Col>
            </Row>
        </Container>
    );
}