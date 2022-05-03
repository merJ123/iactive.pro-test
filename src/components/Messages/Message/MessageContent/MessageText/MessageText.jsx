import ReactPlayer from "react-player";
import Image from "../../../../Image/Image";
import s from "./MessageText.module.css";


const MessageText = (props) => {

  const media = props.attachments.map((el) => {
    if(el.type == 'video'){
      let video = <ReactPlayer controls url={el.url}/>
      return video
    }else if(el.type == 'img'){
      let img = <Image src={el.url} className={s.image}/>
      return img
    }
  })


  return (
    <div className={s.message_text}>
      <p>{props.content}</p>
      <button>Далее</button>
      {media}
    </div>
  );
};

export default MessageText;
