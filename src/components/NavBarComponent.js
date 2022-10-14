import React from 'react';
import { HashLink } from 'react-router-hash-link';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function NavBar(props) {
    const { 
        setHash,
        aboutIsActive,
        projIsActive,
        contactIsActive,
        homeIsActive,
    } = props;

    const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -70; 
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
    };

    const styles = {
        aboutHashLink: {
            textDecoration: 'none',
            margin: '10px 15px',
            padding: '10px 0px',
            color: 'white',
            height: '40px',
            borderBottom: aboutIsActive ? '3px solid white' : '',
        },
        projectsHashLink: {
            textDecoration: 'none',
            margin: '10px 15px',
            padding: '10px 0px',
            color: 'white',
            height: '40px',
            borderBottom: projIsActive ? '3px solid white' : '',
        },
        contactHashLink: {
            textDecoration: 'none',
            margin: '10px 15px',
            padding: '10px 0px',
            color: 'white',
            height: '40px',
            borderBottom: contactIsActive ? '3px solid white' : '',
        },
        homeHashLink: {
            textDecoration: 'none',
            margin: '10px 15px',
            padding: '10px 0px',
            color: 'white',
            height: '40px',
            borderBottom: homeIsActive ? '3px solid white' : '',
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
                        to='/#'
                        scroll={el => scrollWithOffset(el)}
                        style={styles.homeHashLink}
                        onClick={(event) => setHash(event.target.hash)}
                    >
                        Home
                    </HashLink>
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
                    <HashLink 
                        to='/#contact' 
                        scroll={el => scrollWithOffset(el)}
                        style={styles.contactHashLink}
                        onClick={(event) => setHash(event.target.hash)}
                    >
                        Contact
                    </HashLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}