import './App.css';
import React, { useEffect } from 'react'
import axios from 'axios'
import MessageFeed from './components/MessageFeed';


function App() {
  
  const [data, setData] = React.useState([])

  useEffect(() => {
    axios({
      method: 'POST',
      url: 'http://f0665380.xsph.ru/',
      data: {
        actionName: 'MessagesLoad',
        messageId: 0
      },
      headers: { "Content-Type": "multipart/form-data" }
    })
    .then(response => response.data.Messages)
    .then(data => {
        setData(data)
    })
  }, [])

  return (
    <div className="container">
      <MessageFeed store = {data} />
    </div>
  );
}

export default App;
