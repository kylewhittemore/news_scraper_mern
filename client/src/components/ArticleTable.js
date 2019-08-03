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

    async function getPop(id) {
        let data = await Axios.get('/api/articles/' + id)
        // console.log("getpop", data)
        let rawComments = data.data.comments
    //     let polishedComments = rawComments.map(rc => { return { header: rc.header, body: rc.body }
    // })
    // console.log(rawComments)
    setRelevantComments(rawComments)
}

async function addToFavorites(id) {
    // console.log(id)
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
                <td><a href={article.link}>{article.title}</a></td>
                <td className="comment-link" onClick={() => {
                    getPop(article._id).then(setAddCommentModalShow(true))
                    
                    }}>View Comments</td>
                {props.display === "all" ?
                    <td className="favorite-link" onClick={() => {
                        // setFavoritesModalShow(true)
                        addToFavorites(article._id).then(data => console.log("added to favorites: ", data))
                    }}>Add to Favorites</td>
                    :
                    <td className="favorite-link" onClick={() => {
                        console.log("add a comment")
                        // // addComment(article._id).then(data => console.log(data))
                        // addComment(article._id)
                        setAddCommentModalShow(true)
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
            <AddCommentModal comments={relevantComments} show={addCommentModalShow} handleClose={handleClose} handleShow={handleShow} />
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