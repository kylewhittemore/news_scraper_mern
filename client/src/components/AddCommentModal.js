import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import CommentForm from './CommentForm';

const AddCommentModal = props => {
    console.log("inside", props.comments)
    console.log("props id", props.articleId)
    
    async function addComment(comment) {
        // Axios.
    }

    function CommentRender() {
        return (
            (props.comments.length > 0) ? 
            props.comments.map((comment, index) => {
                console.log("comment", comment)
                return (
                    <div key={comment._id}>
                        <p>{comment.header}</p>
                        <p>{comment.body}</p>
                    </div>
                )
            }) : <h4>No comments yet!</h4>
        )
    }


    return (
        <>
            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add a Comment:</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <CommentRender />
                    <CommentForm articleId={props.articleId} />
                </Modal.Body>
            </Modal>
        </>
    )
}

export default AddCommentModal;