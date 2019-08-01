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

  const [comments, setComments] = useState([])

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)

  async function performScrape() {
    let msg = await Axios.get('/scrape/hacker')
    return msg
  }

  async function getFavorites() {
    let favoriteArticles = await Axios.get('/api/articles/favs')
    // console.log(favoriteArticles)
    setArticles(favoriteArticles.data)
    console.log("state", articles)
    return favoriteArticles
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
      <Welcome getFavorites={getFavorites} />
      <Row className="justify-content-center">
        {loading ? <LoadingSpinner /> : <ArticleTable articles={articles} />}
      </Row>
    <CommentList comments={comments} />
    </Container>
  );
}

export default App;
