import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css';

export default function CastingProject() {

    useEffect(() => {
        window.scrollTo(0, 0);
    })

    return (
        <Container>
            <Row className='justify-content-center text-center mt-5'>
                <Col xs={12} lg={8}>
                    <h1>Casting Cards App</h1>
                </Col>
            </Row>
            <Row className='justify-content-center my-4'>
                <Col xs={12} lg={8}>
                    <Row className='text-center'>
                        <Col xs={4}>
                            <h4>
                                <a href='https://casting-card-client.netlify.app/' target='_blank'>Live</a>
                            </h4>
                        </Col>
                        <Col xs={4}>
                            <h4>
                                <a href='https://github.com/bmtef-02/casting-cards-react-to-print.git' target='_blank'>GitHub Frontend</a>
                            </h4>
                        </Col>
                        <Col xs={4}>
                            <h4>
                                <a href='https://github.com/bmtef-02/casting-cards-server.git' target='_blank'>GitHub Backend</a>
                            </h4>
                        </Col>
                    </Row>
                    
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <Col xs={12} lg={8}>
                    <h3>Background</h3>
                    <p className='paragraph'>In the TV industry, the casting department will pitch contestants to network executives to cast the show. As a visual aid, network executives like to see contestant cards laid out in a grid. Each contestant card includes their headshot and information. These cards are used to help make decisions on the final cast. The software currently used by casting teams can create cards, but they are printed individually which take up an entire page. Imagine the amount of paper wasted when pitching hundreds of contestants. Aside from the environmental concerns, the current software cannot print a one-pager of cards laid out in a grid. Therefore, casting departments manually create these grids using a word processor. Many hours can be spent sizing each card, cropping every headshot, and copying and pasting contestant information from a database.</p>
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <Col xs={12} lg={8}>
                    <h3>Goal</h3>
                    <p className='paragraph'>I created this website to be a tool casting departments can use to create a grid of cards more efficiently. To save time with formatting, users select whether to fit 8 or 10 cards on one page, and a 4x2 or 5x2 grid template is created. To fill the grid with data, users simply select a contestant’s name from a dropdown menu and their headshot and other information are automatically added. Once all contestants are selected, users can save the grid for future use, print the grid, or download the grid as a PDF. </p>
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <Col xs={12} lg={8}>
                    <h3>Technologies</h3>
                    <ul className='paragraph'>
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
                        <li>Bootstrap</li>
                        <li>React-Bootstrap</li>
                    </ul>
                    <p className='paragraph'><b>Backend:</b> Express.js was used to create the backend, including all the routes. Mongoose was used to create the schema for the saved templates and the contestants.</p>
                    <p className='paragraph'><b>Frontend:</b> React and React Router were used to create a single page application. JSX was used to create templates, populate contestant information, process forms, and send search queries to the backend. React-Bootstrap, Bootstrap, and CSS were used for styling.</p>
                    <p className='paragraph'><b>Database:</b> MongoDB was used for the database to store the saved templates and the list of contestants users can select from. Axios was used to make requests from the browser.</p>
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <Col xs={12} lg={8}>
                    <h3>Features</h3>
                    <p className='paragraph'>Upon opening the application, users are greeted with a homepage that briefly describes the purpose and functionality of the app. From the homepage, users can either create a grid or view saved grids.</p>
                    <p className='paragraph'>Users have the choice to create a 4x2 grid that shows 8 cards per page, or a 5x2 grid that shows 10 cards per page. To fill a grid with contestant data, users select a contestant from a dropdown menu which doubles as a search bar. By default, the dropdown menu lists contestants by last name A-Z, but users can sort contestants by last name Z-A, ascending or descending age, or ethnicity A-Z. There are plus and minus buttons in the bottom right corner that users can click on to add or subtract pages.</p>
                    <p className='paragraph'>Once a user selects all their contestants, they can save the grid to view or edit later. By clicking save, a modal appears and users are asked to enter the show name, season, pitch/round number, and an optional description. A red notification badge appears on the save button if changes to the grid have not been saved by the user. This functionality is included to notify the user that if they close out of the app without saving, their grid will be deleted.</p>
                    <p className='paragraph'>When users want to print their grid they click on the Preview PDF button. This will show them a preview of their grid. Clicking on the Print/Save PDF button will open the browser printing menu where users can send the grid to their printer or save the grid as a PDF to their device. The Printing Tips button expands a menu that displays tips for best printing results.</p>
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <Col xs={12} lg={8}>
                    <h3>Lessons Learned</h3>
                    <p className='paragraph'>I learned the importance of researching different libraries and components that you can use to create better functionality in your app. React-Select is an example of a component I use as a selectable menu but also a searchable list. Creating this component on my own would have been extremely difficult.</p>
                    <p className='paragraph'>ReactToPrint is another component I use in my app to give users the ability to print out their grids in a consistently styled format. Without this component, grids would not be perfectly printed on A4-sized paper and in landscape orientation. Because I use various components, I learned the importance of being able to read documentation and read the issues that users post to the component’s GitHub to solve problems of my own.</p>
                    <p className='paragraph'>Finally, I greatly improved my knowledge of Flexbox while styling the app to be responsive. It was tedious to get the spacing and positioning of various components the way I envisioned, especially at different breakpoints. Once again, I learned how important it is to be able to read and implement documentation.</p>
                </Col>
            </Row>
        </Container>
    );
}