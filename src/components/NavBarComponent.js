import React from 'react';
import { HashLink } from 'react-router-hash-link';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function NavBar(props) {
    const { 
        setHash,
        aboutIsActive,
        projIsActive,
    } = props;

    const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -55; 
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
    };

    const styles = {
        aboutHashLink: {
            textDecoration: 'none',
            margin: '0 10px',
            padding: 10,
            color: 'white',
            borderRadius: '10px',
            border:  aboutIsActive ? '1px white solid' : '',
        },
        projectsHashLink: {
            textDecoration: 'none',
            margin: '0 10px',
            padding: 10,
            color: 'white',
            borderRadius: '10px',
            border: projIsActive ? '1px white solid' : '',
        }
    }
    
    
    return (
        <Navbar bg='dark' variant='dark' sticky='top'>
            <Navbar.Brand 
                href='/' 
                style={{ marginLeft: 25 }} 
            >
                Brian Jun
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav className='ms-auto'>
                    <HashLink
                        to='/#about'
                        scroll={el => scrollWithOffset(el)}
                        style={styles.aboutHashLink}
                        onClick={(event) => setHash(event.target.hash)}
                    >
                        About
                    </HashLink>
                    <HashLink 
                        to='/#projects' 
                        scroll={el => scrollWithOffset(el)}
                        style={styles.projectsHashLink}
                        onClick={(event) => setHash(event.target.hash)}
                    >
                        Projects
                    </HashLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}