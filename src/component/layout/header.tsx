import { destroyCookie } from "nookies";
import { Component, createSignal, Show } from "solid-js";
import s from "../../scss/layout.module.scss";
import Burger from "./burger";

const Header: Component = () => {
  const [open, setOpen] = createSignal(false);
  const Show_ = Show as any; // cast as any

  

  return (
    <div class={s.header_main}>
      <span class={s.burger}>
        <div
          onClick={() => setOpen((p) => (p = !p))}
          class={`${open() && "open transition-all "}`}
          id="nav-icon1"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <Show_ when={open()}>
          <Burger setIsOpen={setOpen} />
        </Show_>
      </span>
    </div>
  );
};

export default Header;
