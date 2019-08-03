import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import AddCommentModal from './AddCommentModal';
import AddToFavoritesModal from './AddToFavoritesModal'

import Axios from 'axios';

const ArticleTable = props => {


    const [relevantComments, setRelevantComments] = useState([])
    const [relevantArticleId, setRelevantArticleId] = useState();

    const [addCommentModalShow, setAddCommentModalShow] = useState(false);
    const handleClose = () => {
        setAddCommentModalShow(false)
        props.showAll()
    }
    const handleShow = () => setAddCommentModalShow(true)

    const [favoritesModalShow, setFavoritesModalShow] = useState(false);
    const handleFavoritesModalClose = () => {
        setFavoritesModalShow(false)
        props.showAll()
    }
    const handleFavoritesModalShow = () => {
        setFavoritesModalShow(true)
    }

    async function getCommentsByArticle(id) {
        let data = await Axios.get('/api/articles/' + id)
        let rawComments = data.data.comments
        setRelevantArticleId(id)
        setRelevantComments(rawComments)
    }

    async function updateFavorites(id, isFavorite) {
        setFavoritesModalShow(true)
        let article = await Axios({
            method: 'put',
            url: `/api/articles/${id}`,
            data: {
                isFavorite: isFavorite
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
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
        )
    }

    function TableBody() {

        const styles = {
            icon: {
                cursor: "pointer"
            }
        }

        return (
            <tbody>
                {props.articles.map((article, index) => (
                    <tr key={article._id}>
                        <td>{index + 1}</td>
                        <td><a href={article.link}>{article.title}</a></td>

                        <td>
                            {(article.isFavorite === true) ? 
                                
                                <i style={styles.icon} className="p-1 fas fa-star" onClick={() => {
                                    updateFavorites(article._id, false).then(setFavoritesModalShow(true))
                                }}></i>
                                :
                                <i style={styles.icon} className="p-1 far fa-star" onClick={() => {
                                    updateFavorites(article._id, true).then(setFavoritesModalShow(true))
                                }}></i>
                            }
                        </td>

                        {(props.articles[index].comments.length > 0) ?
                            <td><i style={styles.icon} className="p-1 fas fa-comment" onClick={() => {
                                getCommentsByArticle(article._id).then(setAddCommentModalShow(true))
                            }}></i></td>
                            :
                            <td><i style={styles.icon} className="p-1 far fa-comment" onClick={() => {
                                getCommentsByArticle(article._id).then(setAddCommentModalShow(true))
                            }}></i> </td>
                        }

                        <td>
                            <i style={styles.icon} className="p-1 far fa-trash-alt"onClick={() => {
                                console.log("clicked trash")
                            }}></i>
                        </td>

                    </tr>
                ))}
            </tbody>
        )
    }

    return (


        <Table className="align-self-center">
            <AddCommentModal
                comments={relevantComments}
                articleId={relevantArticleId}
                show={addCommentModalShow}
                handleClose={handleClose}
                handleShow={handleShow}
            />

            <AddToFavoritesModal
                show={favoritesModalShow}
                handleClose={handleFavoritesModalClose}
                handleShow={handleFavoritesModalShow}
            />

            <TableHead />

            <TableBody />

        </Table>

    )
}

export default ArticleTable;