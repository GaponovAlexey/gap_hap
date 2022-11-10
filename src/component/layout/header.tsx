import { A, useNavigate } from "@solidjs/router";
import { parseCookies, destroyCookie } from "nookies";
import { Component, createEffect, createSignal, Show } from "solid-js";
import { useContextUser } from "../../context";
import s from "../../scss/layout.module.scss";
import Burger from "../utils/burger";
import Card from "../utils/Card";
import Ham2 from "./ham2";

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
          class={`${open() && "open "}`}
          id="nav-icon1"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <Show_ when={open()} class="transition delay-700 duration-300">
          <Burger open={open()} setIsOpen={setOpen}>
            <Card />
            <Card />
          </Burger>
        </Show_>
      </span>
    </div>
  );
};

export default Header;
