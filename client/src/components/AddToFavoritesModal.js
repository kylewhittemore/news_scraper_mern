import React from 'react';
import Modal from 'react-bootstrap/Modal';

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