import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import AddCommentModal from './AddCommentModal';
import AddToFavoritesModal from './AddToFavoritesModal'
import DeletedModal from './DeletedModal'
import Axios from 'axios';

const ArticleTable = props => {

    // State holds the current comments for an article that was selected
    const [relevantComments, setRelevantComments] = useState([])

    // State that stores the id of the article that will have a crud operation on it 
    const [relevantArticleId, setRelevantArticleId] = useState();

    // Comment Modal State
    const [addCommentModalShow, setAddCommentModalShow] = useState(false);
    const handleCommentModalShow = () => setAddCommentModalShow(true)
    const handleCommentModalClose = () => {
        setAddCommentModalShow(false)
        props.showAll()
    }

    // Favorites Modal State
    const [favoritesModalShow, setFavoritesModalShow] = useState(false);
    const handleFavoritesModalShow = () => setFavoritesModalShow(true)
    const handleFavoritesModalClose = () => {
        setFavoritesModalShow(false)
        props.showAll()
    }

    // Deleted Modal State
    const [deletedModalShow, setDeletedModalShow] = useState(false);
    const handleDeletedModalShow = () => setDeletedModalShow(true)
    const handleDeletedModalClose = () => {
        setDeletedModalShow(false)
        props.showAll()
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
    async function updateDeleted(id) {
        setDeletedModalShow(true)
        let article = await Axios({
            method: 'put',
            url: `/api/articles/${id}`,
            data: {
                isDeleted: true
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
                                updateDeleted(article._id).then(console.log("deleted"))
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
                handleClose={handleCommentModalClose}
                handleShow={handleCommentModalShow}
            />
            
            <DeletedModal 
                show={deletedModalShow}
                handleClose={handleDeletedModalClose}
                handleShow={handleDeletedModalShow}    
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