import React from 'react';
import Modal from 'react-bootstrap/Modal';

const DeletedModal = props => {
    return (
        <>
            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Body>Article deleted.</Modal.Body>
            </Modal>
        </>
    )
}

export default DeletedModal;