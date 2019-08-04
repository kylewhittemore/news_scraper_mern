import React from 'react';
import Modal from 'react-bootstrap/Modal';
import CommentForm from './CommentForm';

const AddCommentModal = props => {   

    function CommentRender() {
        return (
            (props.comments && props.comments.length > 0) ? 
            props.comments.map((comment, index) => {
                console.log("comment", comment)
                return (
                    <div key={comment._id}>
                        <p>{comment.body}</p>
                    </div>
                )
            }) : <p>Add a Comment:</p>
        )
    }

    return (
        <>
            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Body>
                    <CommentRender />
                    <CommentForm hide={props.handleClose} articleId={props.articleId} />
                </Modal.Body>
            </Modal>
        </>
    )
}

export default AddCommentModal;