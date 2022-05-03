import './App.css';
import React, { useEffect } from 'react'
import axios from 'axios'
import Context from './context';
import MessageFeed from './components/MessageFeed';


function App() {
  
  const [data, setData] = React.useState([
    {
      attachments: [
        {
          type:'video',
          url: "http://media.iactive.pro/ZTvhtW44WDYrU4R3wIOB/messages_videos/telegrambot/dSWifIUl6eICdsv2EBZgcJx1Jon9Uwvp.mp4"
        },
        {
          type: 'img',
          url: 'https://ru.reactjs.org/logo-og.png'
        }
      ],
      author: "Хорошие новости",
      channel: "telegrambot",
      content: "Кубанские токари давно научились изготавливать то, что все привыкли ждать из-за границы. Небольшой токарный цех выполняет заказы по замене деталей на импортной технике — что не только дешевле, но и быстрее в производстве⚙️",
      date: "2022-04-03 20:51:03",
      id: "2682",
      region: "",
      senderNumber: "1001692672105"
    }
  ])

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
      console.log(data)
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
