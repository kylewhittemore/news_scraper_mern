import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Welcome from './components/Welcome'
import ArticleTable from './components/ArticleTable'
import CommentList from './components/CommentList'

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

  const articleData = [
    {
      id: 1,
      title: "Functional, Stateful Components",
      summary: "A short tutorial on the basics of React's new future - HOOKS!",
      articleURL: "https://www.taniarascia.com/crud-app-in-react-with-hooks/",
      byline: "Tania Rascia"
    },
    {
      id: 2,
      title: "10 Interview Questions Every JavaScript Developer Should Know",
      summary: "At most companies, management must trust the developers to give technical interviews in order to assess candidate skills. If you do well as a candidate, you’ll eventually need to interview. Here’s how.",
      articleURL: "https://medium.com/javascript-scene/10-interview-questions-every-javascript-developer-should-know-6fa6bdf5ad95",
      byline: "Eric Elliott"
    },
    {
      id: 3,
      title: "Getting Started with React Hooks",
      summary: "React Hooks are a great new feature in React 16.8. React 16.6 brought some awesome new things like React.memo() and React.lazy and Suspense. The React team isn't stopping there.  Hooks are a feature that you'll end up using every single day of your React development. React Hooks are now out in React 16.8! Hooks are great because we get more tools as React developers.",
      articleURL: "https://scotch.io/tutorials/getting-started-with-react-hooks",
      byline: "Chris Sevilleja"
    },
    {
      id: 4,
      title: "What is a regular Expression?",
      summary: "A regular expression is a special text string for describing a search pattern. You can think of regular expressions as wildcards on steroids. You are probably familiar with wildcard notations such as *.txt to find all text files in a file manager. The regex equivalent is .txt",
      articleURL: "https://www.regexbuddy.com/regex.html",
      byline: "Foo man Barr"
    }
  ]

  const [comments, setComments] = useState(commentData)
  const [articles, setArticles] = useState([])
 
  useEffect(() => {
    async function fetchArticles() {
      let response = await Axios.get('/api/articles');
      let data = response.data
      // console.log(data)
      return data;
    }

    fetchArticles().then(data => {
      setArticles(data)
      console.log(data)
    })

  }, [])
  

  return (
    <Container >
      <Welcome />
      <Row>
        <ArticleTable articles={articles} comments={comments}/>
        <CommentList comments={comments} />
      </Row>
      
    </Container>
  );
}

export default App;
