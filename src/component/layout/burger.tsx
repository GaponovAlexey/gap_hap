import { A, useLocation } from "@solidjs/router";
import { createEffect } from "solid-js";
import s from "../../scss/layout.module.scss";

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

const SlowScroll = () =>
  createEffect(() => {
    const smoothScroll = function (targetEl: any, duration: number) {
      let target = document.querySelector(targetEl);
      let targetPosition = target.getBoundingClientRect().top;
      let startPosition = window.pageYOffset;
      let startTime = null as any;

      const ease = function (t: number, b: number, c: number, d: number) {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
      };

      const animation = function (currentTime: number) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, targetPosition, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      };
      requestAnimationFrame(animation);
    };

    const scrollTo = function () {
      const links = document.querySelectorAll(".js-scroll");
      links.forEach((each) => {
        each.addEventListener<any>("click", function () {
          const currentTarget = this.getAttribute("href");
          smoothScroll(currentTarget, 1000);
        });
      });
    };
    scrollTo();
  });

export default Burger;
