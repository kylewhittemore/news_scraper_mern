import React from 'react';
import Table from 'react-bootstrap/Table';

const NewsTable = props => {

    const articles = props.articles;

    const buildArticleTable = articles => {
        return (
            articles.map((article, index) => (
                <tr key={article.id}>
                    <td>{index + 1}</td>
                    <td>{article.title}</td>
                    <td>{article.summary}</td>
                </tr>
            )))
    }

    return (
        <Table className="align-self-center">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Summary</th>
                </tr>
            </thead>
            <tbody>
                {buildArticleTable(articles)}
            </tbody>
        </Table>
    )
}

export default NewsTable;