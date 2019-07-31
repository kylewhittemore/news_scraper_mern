import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import CommentList from './CommentList';

const ArticleTable = props => {

    const [showComments, setShowComments] = useState(false)

    const articles = props.articles;

    const expandRow = () => {
        setShowComments(true)
    }
    
    const buildArticleTable = articles => {
        return (
            articles.map((article, index) => (
                <tr key={article._id}>
                    <td>{index + 1}</td>
                    <td><a href={article.link}>{article.title}</a></td>
                    <td className="comment-link" onClick={expandRow}>author</td>
                </tr>
            )))
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
                {buildArticleTable(articles)}
            </tbody>
        </Table>
    )
}

export default ArticleTable;