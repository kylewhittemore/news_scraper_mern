import React from 'react';
import Table from 'react-bootstrap/Table';

const ArticleTable = props => {

    const articles = props.articles;

    const buildArticleTable = articles => {
        return (
            articles.map((article, index) => (
                <tr key={article._id}>
                    <td>{index + 1}</td>
                    <td><a href={article.link}>{article.title}</a></td>
                    <td>comments</td>
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