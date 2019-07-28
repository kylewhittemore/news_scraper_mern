import React from 'react';
import Table from 'react-bootstrap/Table';

const NewsTable = () => {

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
                <tr>
                    <td>1</td>
                    <td>Snazzy Title From Medium</td>
                    <td>This is where there would be a description, short and sweet.  I think that I would like to use Hackernoon or medium for the articles.</td>
                </tr>
            </tbody>
        </Table>
    )
}

export default NewsTable;