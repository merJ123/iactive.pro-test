import s from "./Messages.module.css";
import Message from "./Message/Message";

const Messages = (props) => {

  let messages = props.store.map((el) => {

    



    return (
    <Message date = {el.date}
             attachments = {el.attachments}
             key = {el.id} 
             time = {el.time}
             author = {el.author}
             profileImage = {el.profileImage}
             profileImageAlt = {el.profileImageAlt}
             channel = {el.channel}
             content = {el.content}
             media = {el.messageImage}
             favoriteMessage = {el.favoriteMessage} />)})

  return (
    <div className={s.message_container}>
      {messages}
    </div>
  );
};

export default Messages;
