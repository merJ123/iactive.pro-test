import Image from '../../../Image/Image'
import s from "./Ava.module.css";

const Ava = (props) => {
  let image = props.image ? (
    <Image src={props.image} alt="img" className="userImage" />
  ) : (
    <Image
      src="https://freepikpsd.com/file/2019/10/default-profile-picture-png-1-Transparent-Images.png"
      className="userImage"
    />
  );

  return (
    <div className={s.ava}>
      <div className={s.image}>{image}</div>
      <p className={s.time}>{props.time}</p>
    </div>
  );
};

export default Ava;
