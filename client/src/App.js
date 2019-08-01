import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Welcome from './components/Welcome'
import ArticleTable from './components/ArticleTable'
import CommentList from './components/CommentList'
import LoadingSpinner from './components/LoadingSpinner'

import './App.css';
import Axios from 'axios';

function App() {

  const commentData = [
    {

      id: 1,
      name: "Kyle",
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eleifend ipsum felis, vitae condimentum diam blandit id. Mauris bibendum diam diam, ornare posuere turpis convallis ac. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla facilisi. Sed ac varius dui.å"
    },
    {
      id: 2,
      name: "Lex",
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eleifend ipsum felis, vitae condimentum diam blandit id. Mauris bibendum diam diam, ornare posuere turpis convallis ac. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla facilisi. Sed ac varius dui.å"
    },
    {
      id: 3,
      name: "Dessa",
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eleifend ipsum felis, vitae condimentum diam blandit id. Mauris bibendum diam diam, ornare posuere turpis convallis ac. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla facilisi. Sed ac varius dui.å"
    },
    {
      id: 4,
      name: "Nixon",
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eleifend ipsum felis, vitae condimentum diam blandit id. Mauris bibendum diam diam, ornare posuere turpis convallis ac. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla facilisi. Sed ac varius dui.å"
    }
  ]

  const [comments, setComments] = useState(commentData)

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)

  async function performScrape() {
    let msg = await Axios.get('/scrape/hacker')
    return msg
  }


  useEffect(() => {
    async function fetchArticles() {
      setLoading(true);
      await performScrape();
      let response = await Axios.get('/api/articles');
      let data = response.data
      return data;
    }
    fetchArticles().then(data => {
      setArticles(data)
      setLoading(false)
    })

  }, []);


  return (
    <Container >
      <Welcome />
      <Row className="justify-content-center">
        {loading ? <LoadingSpinner /> : <ArticleTable articles={articles} />}
      </Row>
    <CommentList comments={comments} />
    </Container>
  );
}

export default App;
