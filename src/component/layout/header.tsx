import { A, useNavigate } from "@solidjs/router";
import { parseCookies, destroyCookie } from "nookies";
import { Component, createEffect, createSignal, Show } from "solid-js";
import s from "../../scss/layout.module.scss";
import Burger from "../utils/burger";
import Card from "../utils/Card";

const Header: Component = () => {
  const [open, setOpen] = createSignal(false);
  const nav = useNavigate();
  const Show_ = Show as any; // cast as any
  const green = "text-green-400";
  const orange = "text-orange-400";
  const blue = "text-blue-400";
  const t = parseCookies();
  const dest = () => {
    destroyCookie(null, "token"), destroyCookie(null, "email");
    nav("/");
  };
  return (
    <div class={s.header_main}>
      <div class="bg-black bg-opacity-25 text-white">
        <A href="/">"{"YOUR SUCCESS"}"</A>
        <h2>We help businesses turn ideas into effective products</h2>
        <ul>
          {t.email ? (
            <button onClick={dest}>Sign Out</button>
          ) : (
            <>
              <A href="/login">
                <span class={green}>#</span>Login
              </A>
              <A href="/register">
                <span class={blue}>#</span>Create Account
              </A>
            </>
          )}
          {/* <A href="/Landing">
            <span class={green}>#</span>Landing
          </A>
          <A href="/Services">
            <span class={orange}>#</span>Web_Services
          </A>
          <A href="/Marketing">
            <span class={blue}>#</span>Internet_Marketing
          </A> */}

          {/* <A href="/about">about us</A> */}
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
        </ul>
      </div>
    </div>
  );
};

export default Header;
