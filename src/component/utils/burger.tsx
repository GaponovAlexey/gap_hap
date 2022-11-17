import { A, useNavigate } from "@solidjs/router";
import { createEffect } from "solid-js";
import s from "../../scss/layout.module.scss";

function Burger({ open, setIsOpen }: any) {
  // Scroll to anchors

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
          <A href="/">Home</A>
          <a href="#products" class="js-scroll">
            Our Products
          </a>
          <a href="#application" class="js-scroll">
            Contact the manager
          </a>
          <A href="/landing">landing</A>
          <A href="/Services">Services</A>
          <A href="/Marketing">Marketing</A>
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

export default Burger;
