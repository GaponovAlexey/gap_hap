import s from "../../scss/layout.module.scss";
const Header = () => {
  return (
    <div class={s.header_main}>
      <h1>gap_hap</h1>
      <div>
        <ul>
          <li>home</li>
          <li>project</li>
          <li>contacts</li>
          <li>about</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
