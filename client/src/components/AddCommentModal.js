import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import CommentForm from './CommentForm';

const AddCommentModal = props => {
    console.log("inside", props.comments)

    function CommentRender() {
        return (
            props.comments.map((comment, index) => {
                console.log("comment", comment)
                return (
                    <div key={comment._id}>
                        <p>{comment.header}</p>
                        <p>{comment.body}</p>
                    </div>
                )
            })
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
                    <CommentForm />
                </Modal.Body>
            </Modal>
        </>
    )
}

export default AddCommentModal;