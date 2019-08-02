import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import AddCommentModal from './addCommentModal';

// import CommentList from './CommentList';
import Axios from 'axios';

const ArticleTable = props => {

    // const [showComments, setShowComments] = useState(false)
    const [relevantComments, setRelevantComments] = useState([])
    
    const [addCommentModalShow, setAddCommentModalShow] = useState(false);
    const handleClose = () => setAddCommentModalShow(false)
    const handleShow = () => setAddCommentModalShow(true)

    useEffect(() => console.log(relevantComments), [relevantComments])

    async function getCommentIds(id) {
        // setShowComments(true)
        console.log(id)
        let response = await Axios.get(`api/articles/${id}`)
        let commentIds = response.data.comments;
        return commentIds
    }

    async function addComment(id) {
        setAddCommentModalShow(true)
        console.log(id)
    }
  
    async function getComments(commentIds) {
        let commentArr = [];

        commentIds.forEach(async id => {
            let comment = await Axios.get(`api/articles/comments/${id}`)
            commentArr.push(comment)
        })
        return commentArr
    }

    async function addToFavorites(id) {
        console.log(id)

        let article = await Axios({
            method: 'put',
            url: `/api/articles/${id}`,
            data: {
                isFavorite: true
            }
        });

        return article
    }

    return (
        <Table className="align-self-center">
            <AddCommentModal show={addCommentModalShow} handleClose={handleClose} handleShow={handleShow} />
            <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>View Comments</th>
                    <th>Add to Favorites</th>
                </tr>
            </thead>
            <tbody>
                {props.articles.map((article, index) => (
                    <tr key={article._id}>
                        <td>{index + 1}</td>
                        <td><a href={article.link}>{article.title}</a></td>
                        <td className="comment-link" onClick={() => {
                            getCommentIds(article._id)
                                .then(async data => {
                                    let comments = await getComments(data)
                                    setRelevantComments(comments)
                                })
                        }}>View Comments</td>
                        {props.display === "all" ?
                            <td className="favorite-link" onClick={() => {
                                addToFavorites(article._id).then(data => console.log(data))
                            }}>Add to Favorites</td>
                            :
                            <td className="favorite-link" onClick={() => {
                                console.log("add a comment")
                                // addComment(article._id).then(data => console.log(data))
                                addComment(article._id)
                            }}>Add Comment</td>
                        }
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}

export default ArticleTable;