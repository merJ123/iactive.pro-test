import s from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={s.footer}>
      <p className={s.footer_active}>#Новое</p>
      <p>#Эксперт</p>
    </div>
  );
};

export default Footer;
