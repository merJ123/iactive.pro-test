import Author from "./Author/Author";
import s from "./MessageContent.module.css";
import MessageText from './MessageText/MessageText'
import Nav from "./Nav/Nav";


const MessageContent = (props) => {
  return(
  <div className={s.message_content}>
    <div className={s.header}>
      <Author author = {props.author}
              channel = {props.channel} />
      <Nav favoriteMessage = {props.favoriteMessage} />
    </div>
    <MessageText content = {props.content}
                 attachments = {props.attachments} />
  </div>
  )
};

export default MessageContent;
