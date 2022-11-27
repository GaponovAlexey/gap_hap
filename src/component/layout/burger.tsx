import { A, useLocation } from "@solidjs/router";
import s from "../../scss/layout.module.scss";
import { SlowScroll } from "../utils/SlowScroll";

function Burger({ setIsOpen }: any) {
  const loc = useLocation();

  // Scroll to anchors
  SlowScroll();
  return (
    <div class={s.burger_main}>
      <section class={s.burger_wrapper}>
        <div onClick={() => setIsOpen(false)} class={s.burger_routs}>
          {loc.pathname == "/" ? (
            <a href="#home" class="js-scroll">
              Home
            </a>
          ) : (
            <A href="/">Home</A>
          )}
          {loc.pathname == "/" ? (
            <a href="#landing" class="js-scroll">
              landing
            </a>
          ) : (
            <A href="/#landing">landing</A>
          )}
          {loc.pathname == "/" ? (
            <a href="#strengths" class="js-scroll">
              Our strengths
            </a>
          ) : (
            <A href="/#strengths">Our strengths</A>
          )}
          {loc.pathname == "/" ? (
            <a href="#application" class="js-scroll">
              Contact the manager
            </a>
          ) : (
            <A href="/#application">Contact the manager</A>
          )}
          {loc.pathname == "/" ? (
            <a href="#marketing" class="js-scroll">
              Marketing
            </a>
          ) : (
            <A href="/#marketing">Marketing</A>
          )}
          {/* right */}
          <A href="/team">Team</A>
        </div>
        {/* ico */}
      </section>
      <section
        class=" w-screen h-full cursor-pointer  "
        onClick={() => setIsOpen(false)}
      ></section>
    </div>
  );
}

export default Burger;
