import s from './EditBtns.module.css'

const EditBtns = () => {
    return(
        <div className={s.editing}>
        <button>Левый</button>
        <button>Центр</button>
        <button>Правый</button>
      </div>
    )
}

export default EditBtns;