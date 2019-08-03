import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';


const CommentForm = props => {



    return (
        <Container>
            <Row className="justify-content-center">
                <Form className="comment-form col-md-8 m-4">
                    <Form.Group>
                        <Form.Label></Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label></Form.Label>
                        <Form.Control type="text" placeholder="Enter your comment" />
                    </Form.Group>
                    <Button variant="primary" type="submit">Submit</Button>
                </Form>
            </Row>
        </Container>
    )

}
export default CommentForm;