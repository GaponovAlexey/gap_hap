import s from "../../scss/layout.module.scss";
const Footer = () => {
  return (
    <div class={s.footer_main}>
      <h3>YOUR SUCCESS</h3>
      <ul>
        <li>Lending</li>
        <li>Web Services</li>
        <li>Marketing</li>
      </ul>
      <h3>Contacts</h3>
      <div>email: email@gmail.com </div>
    </div>
  );
};

export default Footer;
