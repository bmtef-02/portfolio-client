import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function RecipeProject() {

    useEffect(() => {
        window.scrollTo(0, 0);
    })

    return (
        <Container>
            <Row className='justify-content-center' style={{ textAlign: 'center' }}>
                <Col xs={12} lg={8}>
                    <h1>Recipe App</h1>
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <Col xs={12} lg={8}>
                    <Row style={{ textAlign: 'center' }}>
                        <Col xs={4}>
                            <h4>
                                <a href='https://bmtef-02-recipe-app.netlify.app/' target='_blank'>Live</a>
                            </h4>
                        </Col>
                        <Col xs={4}>
                            <h4>
                                <a href='https://github.com/bmtef-02/recipe-app-client.git' target='_blank'>GitHub Frontend</a>
                            </h4>
                        </Col>
                        <Col xs={4}>
                            <h4>
                                <a href='https://github.com/bmtef-02/recipe-app-server.git' target='_blank'>GitHub Backend</a>
                            </h4>
                        </Col>
                    </Row>
                    
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <Col xs={12} lg={8}>
                    <h2>Background</h2>
                    <p>Searching for and reading recipes online is such a pain. When you find a recipe, time is wasted scrolling through blog posts and advertisements until you finally reach what you actually need: the ingredients and directions. Saving these recipes to a notes app or a spreadsheet makes the experience even worse. Imagine how tedious it must be to click open links and sift through meaningless information just to see if you have the correct ingredients to make dinner.</p>
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <Col xs={12} lg={8}>
                    <h2>Goal</h2>
                    <p>I created this website to be a minimalist and customizable recipe app that allows users to create and save their own recipes. Searching for and filtering through recipes is easy, too. Users can search by recipe name or filter by category. Have extra tomatoes lying around your kitchen and don’t know what to make with them? Users can also search by ingredient to see what they could cook for dinner.</p>
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
                        <li>Material UI</li>
                        <li>Bootstrap</li>
                        <li>React-Bootstrap</li>
                    </ul>
                    <p><b>Backend:</b> Express.js was used to create the backend, including all the routes. Mongoose was used to create the schema for the recipes.</p>
                    <p><b>Frontend:</b> React and React Router were used to create a single page application. JSX was used to populate search results, process the forms, and send queries to the backend. React-Bootstrap, Bootstrap, and CSS were used for styling.</p>
                    <p><b>Database:</b> MongoDB was used for the database to store the saved recipes. Axios was used to make requests from the browser.</p>
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <Col xs={12} lg={8}>
                    <h2>Features</h2>
                    <p>Upon opening the application, users choose to create a recipe or search for one. If users create a recipe, they fill out a form and save it to a database. The form includes fields for the name, ingredients, directions, tags, and optional notes. When users are listing out the ingredients and directions, they can add or remove as many entries as they want by clicking the plus or minus buttons. Users can add tags to recipes to categorize them by choosing from a default list or creating a new tag. Before the recipe is saved, the form checks for validation on the name, ingredients, directions and tag fields.</p>
                    <p>Users can search for a recipe by recipe name or an ingredient. All recipes that include the search query are populated on the search results page. Users can also filter by tags using a select menu. When the user finds the desired recipe, they click on the recipe card and are routed to the recipe page that displays all the relevant information. If users want to edit the recipe, they can enable the form by clicking the edit recipe button.</p>
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <Col xs={12} lg={8}>
                    <h2>Lessons Learned</h2>
                    <p>One lesson I learned was the importance of maintaining state in an organized way. Some challenges I faced were handling field changes to update state and validating the form on submission. The useState hook allowed me to easily maintain state and check for validation by passing props to child components. While passing state and updater functions as props works well for a few input fields, organization can get difficult when dealing with many input fields. In the future, I plan on implementing the useContext hook or Redux to maintain state.</p>
                    <p>Another challenge I faced was creating a component that would allow users to add their own options to a select menu if the default options don’t include what they want. The Material UI Autocomplete component met my needs perfectly. At first it was tricky to understand the different syntax, but I was able to successfully implement the component. I learned how important it is to be able to read documentation, and I plan on using Material UI for styling in future projects.</p>
                </Col>
            </Row>
        </Container>
    );
}