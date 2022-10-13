import React from 'react';
import Introduction from './IntroductionComponent';
import About from './AboutComponent';
import Projects from './ProjectsComponent';

export default function Homepage() {

    return (
        <div>
            <Introduction />
            <About />
            <Projects />
        </div>
    );
}