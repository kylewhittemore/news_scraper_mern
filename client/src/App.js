import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Welcome from './components/Welcome'
import NewsTable from './components/NewsTable'
import CommentList from './components/CommentList'
import CommentForm from './components/CommentForm'


import './App.css';

function App() {
  return (
    <Container >
        <Welcome />
      <Row>
        <NewsTable />
      </Row>
      <Row>
        <CommentList />
      </Row>
      <Row>
        <CommentForm />
      </Row>
    </Container>
  );
}

export default App;
