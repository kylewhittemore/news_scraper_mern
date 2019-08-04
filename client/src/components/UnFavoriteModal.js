import React from 'react';
import Modal from 'react-bootstrap/Modal';

const UnfavoriteModal = props => {
    return (
        <>
            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Body>Article removed from favorites.</Modal.Body>
            </Modal>
        </>
    )
}

export default UnfavoriteModal;