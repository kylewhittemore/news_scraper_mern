import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import CommentForm from './CommentForm'

const CommentList = props => {

    const comments = props.comments;

    const buildCommentList = comments => {
        return (
            comments.map((comment, index) => (

                <Row key={comment.id} className="justify-content-center">
                    <div className={
                        (index % 2 === 0) ?
                            `comment col-md-8 text-left my-4 mr-5` :
                            `comment col-md-8 text-right my-4 ml-5`}>
                                
                        <h4 className="commentAuthor">{comment.name}</h4>
                        <p className="commentText">{comment.comment}</p>
                    </div>
                </Row>
            )))
    }

    return (
        <Container>
            {buildCommentList(comments)}
            <CommentForm />
        </Container>
    );
}

export default CommentList;