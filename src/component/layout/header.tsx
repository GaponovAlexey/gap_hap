import { A, useNavigate } from "@solidjs/router";
import { parseCookies, destroyCookie } from "nookies";
import { Component, createEffect, createSignal, Show } from "solid-js";
import { useContextUser } from "../../context";
import s from "../../scss/layout.module.scss";
import Burger from "../utils/burger";
import Card from "../utils/Card";

const Header: Component = () => {
  const [open, setOpen] = createSignal(false);
  const Show_ = Show as any; // cast as any
  const green = "text-green-400";
  const blue = "text-blue-400";
  const [user, { logOut }] = useContextUser() as any;
  const dest = () => {
    destroyCookie(null, "token"), destroyCookie(null, "email");
    logOut();
  };

  return (
    <div class={s.header_main}>
      <span class={s.burger}>
        <Show_
          when={open()}
          fallback={
            <button onClick={() => setOpen((p) => (p = !p))}>open</button>
          }
        >
          <button onClick={() => setOpen((p) => (p = !p))}>closed</button>
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
