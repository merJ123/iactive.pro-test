
import Ava from "./Ava/Ava";
import Footer from "./Footer/Footer";
import s from "./Message.module.css"
import MessageContent from "./MessageContent/MessageContent";

const Message = (props) => {

    const time = props.date.slice(11, 16)

    return(
        <div className={s.message}>
                <Ava image = {props.profileImage} 
                     time = {time} 
                     alt = {props.profileImageAlt} 
                     />
                <MessageContent attachments = {props.attachments}
                                author = {props.author}
                                channel = {props.channel} 
                                content = {props.content} 
                                messageImage = {props.messageImage} 
                                favoriteMessage = {props.favoriteMessage} />
                <Footer />
            </div>
    )
}

export default Message;