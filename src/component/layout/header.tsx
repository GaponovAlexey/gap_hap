import { A } from "@solidjs/router";
import s from "../../scss/layout.module.scss";
const Header = () => {
  return (
    <div class={s.header_main}>
      <h1><A href='/'>gap_hap</A></h1>
      <h2>We help businesses turn ideas into effective products</h2>
      <div>
        <ul>
          <li><A href='/Lending'>Lending</A></li>
          <li><A href='/Services'>Web Services</A></li>
          <li><A href='/Marketing'>Internet Marketing</A></li>
          <li><A href='/about'>about us</A></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
