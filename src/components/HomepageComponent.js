import React, { useState, useEffect } from 'react';
import Introduction from './IntroductionComponent';
import About from './AboutComponent';
import Projects from './ProjectsComponent';

export default function Homepage(props) {

    const { setHash } = props;

    return (
        <React.Fragment>
            <Introduction 
                setHash={setHash}
            />
            <About />
            <Projects setHash={setHash} />
        </React.Fragment>
    );
}