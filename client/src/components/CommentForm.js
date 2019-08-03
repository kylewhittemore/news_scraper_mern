import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Axios from 'axios'

const CommentForm = props => {
    console.log("form", props.articleId)

    const initialFormState = { header: '', body: '' }
    const [comment, setComment] = useState(initialFormState)

    

    async function addComment(comment) {
        let newComment = {
            header: comment.header,
            body: comment.body
        }

        let response = await Axios.post('/api/articles/' + props.articleId, newComment)
        console.log(response)
        return response
    }

    const handleInputChange = event => {
        const { name, value } = event.target
        setComment({ ...comment, [name]: value})
    }

    return (
        <Container>
            <Row className="justify-content-center">
                <Form onSubmit={async event => {
                    event.preventDefault()
                    let favs = await addComment(comment)
                    props.hide()
                    return favs
                    
                }} className="comment-form col-md-8 m-4">
                    <Form.Group>
                        <Form.Label></Form.Label>
                        <Form.Control name="header" value={comment.header} type="text" placeholder="Enter Name" onChange={handleInputChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label></Form.Label>
                        <Form.Control name="body" value={comment.body} type="text" placeholder="Enter your comment" onChange={handleInputChange} />
                    </Form.Group>
                    <Button variant="primary" type="submit">Submit</Button>
                </Form>
            </Row>
        </Container>
    )

}
export default CommentForm;