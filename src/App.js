import React, {useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBarComponent';
import Homepage from './components/HomepageComponent';
import NFLProject from './components/NFLProjectComponent';
import CastingProject from './components/CastingProjectComponent';
import RecipeProject from './components/RecipeProjectComponent';
import Footer from './components/FooterComponent';

export default function App() {

    const [hash, setHash] = useState(window.location.hash)
    const [homeIsActive, setHomeIsActive] = useState(false);
    const [aboutIsActive, setAboutIsActive] = useState(false);
    const [projIsActive, setProjIsActive] = useState(false);
    const [contactIsActive, setContactIsActive] = useState(false);

    useEffect(() => {
        if (hash === '#') {
            setProjIsActive(false);
            setAboutIsActive(false);
            setContactIsActive(false);
            setHomeIsActive(true);
        }
        else if (hash === '#about') {
            setProjIsActive(false);
            setAboutIsActive(true);
            setContactIsActive(false);
            setHomeIsActive(false);
        } else if (hash === '#projects') {
            setProjIsActive(true);
            setAboutIsActive(false);
            setContactIsActive(false);
            setHomeIsActive(false);
        } else if (hash === '#contact') {
            setProjIsActive(false);
            setAboutIsActive(false);
            setContactIsActive(true);
            setHomeIsActive(false);
        } else if (hash === 'projects-page') {
            setProjIsActive(false);
            setAboutIsActive(false);
            setContactIsActive(false);
            setHomeIsActive(false);
        } else {
            setProjIsActive(false);
            setAboutIsActive(false);
            setContactIsActive(false);
            setHomeIsActive(true);
        }
    }, [hash])

    return (
        <React.Fragment>
            <NavBar 
                setHash={setHash}
                aboutIsActive={aboutIsActive}
                projIsActive={projIsActive}
                contactIsActive={contactIsActive}
                homeIsActive={homeIsActive}
            />
            <Routes>
                <Route path='/' element={<Homepage setHash={setHash} />} />
                <Route path='/projects/nfl' element={<NFLProject />} />
                <Route path='/projects/casting' element={<CastingProject />} />
                <Route path='/projects/recipe' element={<RecipeProject />} />
            </Routes>
            <Footer />
        </React.Fragment>
        
    )
}