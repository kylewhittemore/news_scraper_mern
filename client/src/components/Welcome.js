import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button'
// import { PromiseProvider } from 'mongoose';

const Welcome = (props) => {

    return (
        <Jumbotron>
            <h2>Scraper Stash</h2>
            <p>scraping news since 2019</p>
            <Button onClick={props.performScrape}>Check for new articles</Button>
        </Jumbotron>
    )
}

export default Welcome;