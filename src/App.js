import './App.css';
import React, { useEffect } from 'react'
import axios from 'axios'
import MessageFeed from './components/MessageFeed';


function App() {
  
  const [posts, setPosts] = React.useState([])

  useEffect(() => {
    axios({
      method: 'POST',
        url: 'http://f0665380.xsph.ru/',
        data: {
          actionName: 'MessagesLoad',
          oldMessages: true
        },
        headers: { "Content-Type": "multipart/form-data" }
    }).then(response => console.log(response, "old message"))
  }, [])

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
          localStorage.setItem('posts', JSON.stringify(data))
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
          .then(data => {
            let raw = JSON.parse(localStorage.getItem('posts')) || []

            if(data === undefined){
              return []
            }else{
              setTimeout((console.log(data, raw)), 2000)
              raw = data.map(el => {
                raw.push(el)
                console.log(el, ' el', raw)
                localStorage.setItem('posts', JSON.stringify(raw))
                setPosts(raw)
              })
              console.log(raw, " raw")
            }
            
          })
        }), 5000)
      })
  }, [])


  

  return (
    <div className="container">
      <MessageFeed store = {posts} />
    </div>
  );
}

export default App;
