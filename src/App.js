import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './components/HomepageComponent';

export default function App() {
    return (
        <Routes>
            <Route path='/' element={<Homepage />} />
        </Routes>
    )
}