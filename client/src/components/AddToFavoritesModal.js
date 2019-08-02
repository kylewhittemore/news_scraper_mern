import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'
import CommentForm from './CommentForm'

const AddCommentModal = props => {
    return (
        <>

            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Close
            </Button>
                    <Button variant="primary" onClick={props.handleClose}>
                        Save Changes
            </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default AddCommentModal;