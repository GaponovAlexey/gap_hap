import s from "../../scss/layout.module.scss";
const Header = () => {
  return (
    <div class={s.header_main}>
      <h1>gap_hap</h1>
      <h2>We help businesses turn ideas into effective products</h2>
      <div>
        <ul>
          <li>Lending</li>
          <li>Web Services</li>
          <li>Internet Marketing</li>
          <li>about us</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
