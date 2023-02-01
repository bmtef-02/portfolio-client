import React, {useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBarComponent';
import Homepage from './components/HomepageComponent';
import NFLProject from './components/NFLProjectComponent';
import CastingProject from './components/CastingProjectComponent';
import RecipeProject from './components/RecipeProjectComponent';
import Footer from './components/FooterComponent';

export default function App() {

    return (
        <React.Fragment>
            <NavBar />
            <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path='/projects/nfl' element={<NFLProject />} />
                <Route path='/projects/casting' element={<CastingProject />} />
            </Routes>
            <Footer />
        </React.Fragment>
        
    )
}