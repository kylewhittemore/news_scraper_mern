import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'

const CommentList = () => {

    return (
        <Container>
            <Row className="justify-content-center">
                <div className="comment col-md-8 text-left my-4 mr-5">
                    <h4 className="commentAuthor">Eliot Rosewater</h4>
                    <p className="commentText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eleifend ipsum felis, vitae condimentum diam blandit id. Mauris bibendum diam diam, ornare posuere turpis convallis ac. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla facilisi. Sed ac varius dui.</p>
                </div>
            </Row>
            <Row className="justify-content-center">
                <div className="comment col-md-8 text-right my-4 ml-5">
                    <h4 className="commentAuthor">Eliot Rosewater</h4>
                    <p className="commentText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eleifend ipsum felis, vitae condimentum diam blandit id. Mauris bibendum diam diam, ornare posuere turpis convallis ac. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla facilisi. Sed ac varius dui.</p>
                </div>
            </Row>
        </Container>
    );
}

export default CommentList;