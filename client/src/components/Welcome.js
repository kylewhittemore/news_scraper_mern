import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button'

const Welcome = props => {

    return (
        <Jumbotron>
            <h2>Scraper Stash</h2>
            <p>scraping news since 2019</p>
            <Button className="m-1" onClick={() => {
                props.getFavorites().then(data => console.log(data))
                }}>Show Favorites</Button>
            <Button className="m-1" onClick={() => {
                props.showAll().then(data => console.log(data))
                }}>Show All</Button>
        </Jumbotron>
    )
}

export default Welcome;