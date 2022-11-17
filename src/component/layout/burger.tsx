import { A, useLocation } from "@solidjs/router";
import { createEffect } from "solid-js";
import s from "../../scss/layout.module.scss";

function Burger({ setIsOpen }: any) {
  const loc = useLocation();
  console.log("loc", loc.pathname);

  // Scroll to anchors
  SlowScroll();
  return (
    <div class={s.burger_main}>
      <section class={s.burger_wrapper}>
        {/* ico */}
        <div onClick={() => setIsOpen(false)} id="nav-icon1">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2.5"
            stroke="#000"
            class="w-12 h-12 "
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>
        {/* ico */}
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
          <A href="/GaponovAlexey">Owner</A>
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
    const smoothScroll = function (targetEl: any, duration: any) {
      let target = document.querySelector(targetEl);
      let targetPosition = target.getBoundingClientRect().top;
      let startPosition = window.pageYOffset;
      let startTime = null as any;

      const ease = function (t: any, b: any, c: any, d: any) {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
      };

      const animation = function (currentTime: any) {
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
        each.addEventListener("click", function () {
          const currentTarget = this.getAttribute("href");
          smoothScroll(currentTarget, 1000);
        });
      });
    };
    scrollTo();
  });

export default Burger;
