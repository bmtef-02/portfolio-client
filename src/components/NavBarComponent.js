import React, { useState } from 'react';
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

    const [expanded, setExpanded] = useState(false);

    const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        let yOffset;
        if (expanded) {
            yOffset = -270; 
        } else {
            yOffset = -70; 
        }
        
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
    };

    const onClickNav = (event) => {
        setHash(event.target.hash);
        setExpanded(false)
    }

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