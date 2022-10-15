import { A } from "@solidjs/router";
import { Component, createEffect, createSignal, Show } from "solid-js";
import s from "../../scss/layout.module.scss";
import Burger from "../utils/burger";
import Card from "../utils/Card";

const Header: Component = () => {
  const [open, setOpen] = createSignal(false);
  const Show_ = Show as any; // cast as any

  return (
    <div class={s.header_main}>
      <div class="bg-black bg-opacity-25 text-white">
        <A href="/">"{"YOUR SUCCESS"}"</A>
        <h2 class="text-xs p-1">
          We help businesses turn ideas into effective products
        </h2>
        <ul>
          <A href="/Lending">Lending</A>
          <A href="/Services">Web Services</A>
          <A href="/Marketing">Internet Marketing</A>
          <A href="/about">about us</A>
        </ul>
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
      </div>
    </div>
  );
};

export default Header;
