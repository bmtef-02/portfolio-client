import React, {useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBarComponent';
import Homepage from './components/HomepageComponent';
import NFLProject from './components/NFLProjectComponent';
import CastingProject from './components/CastingProjectComponent';
import RecipeProject from './components/RecipeProjectComponent';

export default function App() {

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
            <Routes>
                <Route path='/' element={<Homepage setHash={setHash} />} />
                <Route path='/projects/nfl' element={<NFLProject />} />
                <Route path='/projects/casting' element={<CastingProject />} />
                <Route path='/projects/recipe' element={<RecipeProject />} />
            </Routes>
        </React.Fragment>
        
    )
}