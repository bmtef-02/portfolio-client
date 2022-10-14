import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function NFLProject() {

    useEffect(() => {
        window.scrollTo(0, 0);
    })

    return (
        <Container>
            <Row className='justify-content-center text-center'>
                <Col xs={12} lg={8}>
                    <h1>NFL Pick'ems Score Tracker App</h1>
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <Col xs={12} lg={8}>
                    <Row className='text-center'>
                        <Col xs={4}>
                            <h4>
                                <a href='https://nfl-pickems-app.netlify.app/' target='_blank'>Live</a>
                            </h4>
                        </Col>
                        <Col xs={4}>
                            <h4>
                                <a href='https://github.com/bmtef-02/nfl-pickems.git' target='_blank'>GitHub Frontend</a>
                            </h4>
                        </Col>
                        <Col xs={4}>
                            <h4>
                                <a href='https://github.com/bmtef-02/nfl-pickems-server.git' target='_blank'>GitHub Backend</a>
                            </h4>
                        </Col>
                    </Row>
                    
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <Col xs={12} lg={8}>
                    <h2>Background</h2>
                    <p>NFL Pick’ems is a weekly game that lets you compete with friends by picking the winners of each NFL game for the week. You get points for every correct pick you make and the person with the most points at the end of each week is the winner for that week. If there is a tie, the tie breaker is whoever comes closest to guessing the total points scored in the Monday Night Football game.</p>
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <Col xs={12} lg={8}>
                    <h2>Goal</h2>
                    <p>I created this website to automatically gather results of each NFL game and compute the point totals to determine the weekly winner. In my experience, the point totals are manually tallied in a spreadsheet, which is more tedious and less visually appealing then my app. Users submit their picks using a separate Google Form and this data is uploaded to a database on MongoDB. The scores and results of each NFL game is pulled from an ESPN API. When users open the app, they can select the week they want to view results for. They can also click on any user’s name to expand an accordion that shows which picks a user guessed correctly and how close the user was to guessing the total points scored in the Monday Night Football game.</p>
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <Col xs={12} lg={8}>
                    <h2>Technologies</h2>
                    <ul>
                        <li>React.js</li>
                        <li>Express.js</li>
                        <li>Node.js</li>
                        <li>Axios</li>
                        <li>React Router</li>
                        <li>MongoDB</li>
                        <li>Mongoose</li>
                        <li>JavaScript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Sass</li>
                        <li>Bootstrap</li>
                        <li>React-Bootstrap</li>
                    </ul>
                    <p><b>Backend:</b> Express.js was used to create the backend, including all the routes. Mongoose was used to create the schema for the weekly user picks.</p>
                    <p><b>Frontend:</b> The frontend was created using React.js, JavaScript, HTML, CSS, Sass, Bootstrap, and React-Bootstrap. React and React Router were used to create a single page application. JSX was used to manipulate the API data and populate results for each NFL game. Styling was done mostly with Bootstrap, React-Bootstrap and CSS. Sass was used to customize Bootstrap spacing utilities.</p>
                    <p><b>Data:</b> Two sets of data are being used: user-picks data and NFL data. The user-picks data was collected using a Google Form and the form data was converted into a JSON object, which was uploaded to a MongoDB database. I found a <a href='https://gist.github.com/nntrn/ee26cb2a0716de0947a0a4e9a157bc1c' target='_blank'>free ESPN API</a> on GitHub Gist to gather the NFL data. GET requests to endpoints for each NFL game yielded relevant data such as scores, home and away teams, and the status of each game.</p>
                    <p><b>Database:</b> MongoDB was used for the database to store all of the users’ picks for each week in the NFL season. Axios was used to make requests from the browser.</p>
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <Col xs={12} lg={8}>
                    <h2>Features</h2>
                    <p>Upon opening the application, API data loads for the current week in the NFL season, and users can view each user’s score. Users can select any week in the NFL season, but if the picks for the week are not available yet, the user will be asked to select a previous week.</p>
                    <p>If users want to see how many picks they guessed correctly, they can click on any user’s name. An accordion will expand displaying each NFL game score, if the pick was correct, and how close the user was to guessing the total points scored in the Monday Night Football game.</p>
                    <p>If a user’s pick is correct, the pick will be highlighted green. If the pick is incorrect, it will be highlighted red. If the game has not started or it isn’t finished, the pick will be highlighted gray. A “live” badge will appear next to the pick if the game is in progress.</p>
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <Col xs={12} lg={8}>
                    <h2>Lessons Learned</h2>
                    <p>The main challenge I faced was working with the ESPN API. In order to get the data I wanted, I had to chain multiple GET requests for each NFL game. Since there are 13-16 NFL games in any given week, I had to be very careful with the order in which I chained promises. If all of the promises weren’t fulfilled and the application tried loading results before fulfillment, it would crash. To overcome this challenge, I researched more about Promise methods and how to properly chain Promises together.</p>
                </Col>
            </Row>
        </Container>
    );
}