import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import AddCommentModal from './AddCommentModal';
import AddToFavoritesModal from './AddToFavoritesModal'
import CommentList from './CommentList';

import Axios from 'axios';

const ArticleTable = props => {

    const [relevantComments, setRelevantComments] = useState([])

    const [addCommentModalShow, setAddCommentModalShow] = useState(false);
    const handleClose = () => setAddCommentModalShow(false)
    const handleShow = () => setAddCommentModalShow(true)

    const [favoritesModalShow, setFavoritesModalShow] = useState(false);
    const handleFavoritesModalClose = () => setFavoritesModalShow(false)
    const handleFavoritesModalShow = () => setFavoritesModalShow(true)

    // useEffect(() => {
    //     console.log("relevant comments", relevantComments)
        

    // }, [relevantComments])

    async function getCommentIds(id) {
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

    async function getPop(id) {
        let data = await Axios.get('/api/articles/' + id)
        console.log("getpop", data)
    }

    async function addToFavorites(id) {
        console.log(id)
        setFavoritesModalShow(true)
        let article = await Axios({
            method: 'put',
            url: `/api/articles/${id}`,
            data: {
                isFavorite: true
            }
        });

        return article
    }

    function TableHead() {
        return (
            <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>View Comments</th>
                    <th>Add to Favorites</th>
                </tr>
            </thead>
        )
    }

    function TableBody() {
        return (
            props.articles.map((article, index) => (
                <tr key={article._id}>
                    <td>{index + 1}</td>
                    <td><a href={article.link}>{article.title}</a><div>{relevantComments}</div></td>
                    <td className="comment-link" onClick={() => {
                      getPop(article._id)
                      
                      // getCommentIds(article._id)
                        //     .then(async data => {
                        //         let comments = await getComments(data)
                        //         setRelevantComments(comments)
                        //     })
                    }}>View Comments</td>
                    {props.display === "all" ?
                        <td className="favorite-link" onClick={() => {
                            // setFavoritesModalShow(true)
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
            ))
        )
    }

    return (
        <div>
            {/* <CommentList relevantComments={relevantComments} /> */}
            <div><h1>what the fuck anyhow</h1></div>
            <Table className="align-self-center">
                <AddCommentModal show={addCommentModalShow} handleClose={handleClose} handleShow={handleShow} />
                <AddToFavoritesModal show={favoritesModalShow} handleClose={handleFavoritesModalClose} handleShow={handleFavoritesModalShow} />
                <TableHead />
                <tbody>
                    <TableBody />
                </tbody>
            </Table>
        </div>
    )
}

export default ArticleTable;