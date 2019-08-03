import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import AddCommentModal from './AddCommentModal';
import AddToFavoritesModal from './AddToFavoritesModal'

import Axios from 'axios';

const ArticleTable = props => {

    const [relevantComments, setRelevantComments] = useState([])
    const [relevantArticleId, setRelevantArticleId] = useState();

    const [addCommentModalShow, setAddCommentModalShow] = useState(false);
    const handleClose = () => setAddCommentModalShow(false)
    const handleShow = () => setAddCommentModalShow(true)

    const [favoritesModalShow, setFavoritesModalShow] = useState(false);
    const handleFavoritesModalClose = () => setFavoritesModalShow(false)
    const handleFavoritesModalShow = () => setFavoritesModalShow(true)

    async function getCommentsByArticle(id) {
        let data = await Axios.get('/api/articles/' + id)
        let rawComments = data.data.comments
        setRelevantArticleId(id)
        setRelevantComments(rawComments)
    }

    async function addToFavorites(id) {
        setFavoritesModalShow(true)
        let article = await Axios({
            method: 'put',
            url: `/api/articles/${id}`,
            data: {
                isFavorite: true
            }
        });

        // setRelevantArticleId(article.id)

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
                    <td><a href={article.link}>{article.title}</a></td>

                    <td className="comment-link" onClick={() => {
                        getCommentsByArticle(article._id).then(setAddCommentModalShow(true))
                    }}>View Comments</td>

                    <td className="favorite-link" onClick={() => {
                        addToFavorites(article._id).then(data => console.log("added to favorites: ", data))
                    }}>Add to Favorites</td>

                </tr>
            ))
        )
    }

    return (
        <div>

            <Table className="align-self-center">
                <AddCommentModal comments={relevantComments} articleId={relevantArticleId} show={addCommentModalShow} handleClose={handleClose} handleShow={handleShow} />
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