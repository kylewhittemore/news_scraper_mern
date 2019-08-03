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

  // const [comments, setComments] = useState([])
  const [display, setDisplay] = useState("all")
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)

  async function performScrape() {
    let msg = await Axios.get('/scrape/hacker')
    return msg
  }

  async function getFavorites() {
    let favoriteArticles = await Axios.get('/api/articles/favs')
    // console.log(favoriteArticles)
    setDisplay("favs")
    setArticles(favoriteArticles.data)
    // console.log("state", articles)
    return favoriteArticles
  }

  async function showAll() {
    let allArticles = await Axios.get('/api/articles')
    setDisplay("all")
    setArticles(allArticles.data)
    // console.log("state", articles)
    return allArticles
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
    }).catch(err => setLoading(false))

  }, []);

  return (
    <Container >
      <Welcome getFavorites={getFavorites} display={display} showAll={showAll} />
      <Row className="justify-content-center">
        {loading ? <LoadingSpinner /> : <ArticleTable getFavorites={getFavorites} showAll={showAll} display={display} articles={articles} />}
      </Row>
    </Container>
  );
}

export default App;
