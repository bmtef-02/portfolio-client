import React, { useState, useEffect } from 'react';
import Introduction from './IntroductionComponent';
import About from './AboutComponent';
import Projects from './ProjectsComponent';
import NavBar from './NavBarComponent';

export default function Homepage() {

    const [hash, setHash] = useState(window.location.hash)
    const [aboutIsActive, setAboutIsActive] = useState(false);
    const [projIsActive, setProjIsActive] = useState(false);

    useEffect(() => {
        if (hash === '#about') {
            setAboutIsActive(true);
            setProjIsActive(false);
        } else if (hash === '#projects') {
            setProjIsActive(true);
            setAboutIsActive(false);
        } else {
            setProjIsActive(false);
            setAboutIsActive(false);
        }
    }, [hash])

    return (
        <React.Fragment>
            <NavBar 
                setHash={setHash}
                aboutIsActive={aboutIsActive}
                projIsActive={projIsActive}
            />
            <Introduction 
                setHash={setHash}
            />
            <About />
            <Projects />
        </React.Fragment>
    );
}