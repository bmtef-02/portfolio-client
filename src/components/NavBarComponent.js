import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function NavBar() {

    const { pathname } = useLocation();
    const [expanded, setExpanded] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);

    const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.scrollY;
        let yOffset;
        if (expanded) {
            yOffset = -270; 
        } else {
            yOffset = -70; 
        }
        
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
    };

    const onClickNav = (event) => {
        setExpanded(false)
    }

    const styles = {
        aboutHashLink: {
            textDecoration: 'none',
            margin: '10px 15px',
            padding: '10px 0px',
            color: 'white',
            height: '40px',
            borderBottom: pathname === '/' && scrollPosition > 810 && scrollPosition < 1570 ? '3px solid white' : '',
        },
        projectsHashLink: {
            textDecoration: 'none',
            margin: '10px 15px',
            padding: '10px 0px',
            color: 'white',
            height: '40px',
            borderBottom: pathname === '/' && scrollPosition > 1570 && scrollPosition < 2600 ? '3px solid white' : '',
        },
        contactHashLink: {
            textDecoration: 'none',
            margin: '10px 15px',
            padding: '10px 0px',
            color: 'white',
            height: '40px',
            borderBottom: pathname === '/' && scrollPosition > 2600 ? '3px solid white' : '',
        },
        homeHashLink: {
            textDecoration: 'none',
            margin: '10px 15px',
            padding: '10px 0px',
            color: 'white',
            height: '40px',
            borderBottom: pathname === '/' && scrollPosition < 810 ? '3px solid white' : '',
        }
    }

    useEffect(() => {
        const updatePosition = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener('scroll', updatePosition);
    }, [])
    
    
    return (
        <Navbar bg='dark' variant='dark' sticky='top' expand='md' expanded={expanded} onToggle={() => setExpanded(!expanded)}>
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
                        onClick={onClickNav}
                    >
                        Home
                    </HashLink>
                    <HashLink
                        to='/#about'
                        scroll={el => scrollWithOffset(el)}
                        style={styles.aboutHashLink}
                        onClick={onClickNav}
                    >
                        About
                    </HashLink>
                    <HashLink 
                        to='/#projects' 
                        scroll={el => scrollWithOffset(el)}
                        style={styles.projectsHashLink}
                        onClick={onClickNav}
                    >
                        Projects
                    </HashLink>
                    <HashLink 
                        to='/#contact' 
                        scroll={el => scrollWithOffset(el)}
                        style={styles.contactHashLink}
                        onClick={onClickNav}
                    >
                        Contact
                    </HashLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}