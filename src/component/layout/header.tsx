import { destroyCookie } from "nookies";
import { Component, createSignal, Show } from "solid-js";
import { useContextUser } from "../../context";
import s from "../../scss/layout.module.scss";
import Burger from "../utils/burger";

const Header: Component = () => {
  const [open, setOpen] = createSignal(false);
  const Show_ = Show as any; // cast as any
  const [user, { logOut }] = useContextUser() as any;
  const dest = () => {
    destroyCookie(null, "token"), destroyCookie(null, "email");
    logOut();
  };
  

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
