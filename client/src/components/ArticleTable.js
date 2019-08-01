import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import CommentList from './CommentList';
import Axios from 'axios';

const ArticleTable = props => {

    const [showComments, setShowComments] = useState(false)
    const [relevantComments, setRelevantComments] = useState([])
    const [loading, setLoading] = useState(false) 

    const articles = props.articles;

    async function getComments(id) {
        // setShowComments(true)
        console.log(id)
        let response = await Axios.get(`api/articles/${id}`)
        return response.data
    }
    
    return (
        <Table className="align-self-center">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Comments</th>
                </tr>
            </thead>
            <tbody>
                {articles.map((article, index) => (
                <tr key={article._id}>
                    <td>{index + 1}</td>
                    <td><a href={article.link}>{article.title}</a></td>
                    <td className="comment-link" onClick={() => {
                        getComments(article._id)
                        .then(data => console.log(data))
                    }}>author</td>
                </tr>
            ))}
            </tbody>
        </Table>
    )
}

export default ArticleTable;