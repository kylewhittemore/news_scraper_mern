import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'

const AddCommentModal = props => {
    return (
        <>
            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Body>Article added to favorites.</Modal.Body>
            </Modal>
        </>
    )
}

export default AddCommentModal;