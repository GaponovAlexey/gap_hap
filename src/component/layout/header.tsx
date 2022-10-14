import { A } from "@solidjs/router";
import s from "../../scss/layout.module.scss";
const Header = () => {
  return (
    <div class={s.header_main}>
      <div class="bg-black bg-opacity-25 text-white" >
        <A href="/">"{"YOUR SUCCESS"}"</A>
        <h2 class="text-xs p-1" >We help businesses turn ideas into effective products</h2>
        <ul>
          <A href="/Lending">Lending</A>
          <A href="/Services">Web Services</A>
          <A href="/Marketing">Internet Marketing</A>
          <A href="/about">about us</A>
        </ul>
      </div>
    </div>
  );
};

export default Header;
