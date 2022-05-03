import s from './Author.module.css'

const Author = (props) => {
    return(
        <div className={s.user}>
        <p className={s.userName}> {props.author} </p>
        <p className={s.comment}>
          {props.channel}
        </p>
      </div>
    )
}

export default Author;