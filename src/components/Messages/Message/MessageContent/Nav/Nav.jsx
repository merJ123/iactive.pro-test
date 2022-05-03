import Communication from "./Communication/Communication";
import EditBtns from "./EditBtns/EditBtns";
import s from "./Nav.module.css";

const Nav = (props) => {
  return (
    <nav className={s.nav}>
      <EditBtns />
      <Communication favoriteMessage = {props.favoriteMessage} />
    </nav>
  );
};

export default Nav;