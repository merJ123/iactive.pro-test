import './App.css';
import React, { useEffect } from 'react'
import axios from 'axios'
import MessageFeed from './components/MessageFeed';


function App() {
  
  const [posts, setPosts] = React.useState([])

  useEffect(() => {
    const raw = localStorage.getItem('posts') || []
    setPosts(JSON.parse(raw))
  }, [])

  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts))
  }, [posts])

  useEffect(() => {
      axios({
        method: 'POST',
        url: 'http://f0665380.xsph.ru/',
        data: {
          actionName: 'MessagesLoad',
        },
        headers: { "Content-Type": "multipart/form-data" }
      })
      .then(response => response.data.Messages)
      .then(data => {
        console.log(data)
          setPosts(data)
          return data
      })


    .then(data => {
      setInterval((() => {
        let lastElem = data.slice(-1)
        axios({
          method: 'POST',
          url: 'http://f0665380.xsph.ru/',
          data: {
            actionName: 'MessagesLoad',
            messageId: lastElem[0].id
          },
          headers: { "Content-Type": "multipart/form-data" }
        })
        .then(response => response.data.Messages)
        .then(newElement => {

        })
      }), 2000)
    })
    
  }, [])

  // useEffect(() => {
  //   let lastElem = posts.slice(-1)
  // }, [])

  

  return (
    <div className="container">
      <MessageFeed store = {posts} />
    </div>
  );
}

export default App;
