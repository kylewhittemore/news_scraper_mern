import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import CommentForm from './CommentForm';

const AddCommentModal = props => {
    return (
        <>
            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add a Comment:</Modal.Title>
                </Modal.Header>
                <Modal.Body><CommentForm /></Modal.Body>
            </Modal>
        </>
    )
}

export default AddCommentModal;