import { A, useNavigate } from "@solidjs/router";

function Burger({ open, setIsOpen }: any) {
  (function () {
    const smoothScroll = function (targetEl: any, duration: any) {
      const headerElHeight =
        document.querySelector<any>(".header").clientHeight;
      let target = document.querySelector(targetEl);
      let targetPosition = target.getBoundingClientRect().top - headerElHeight;
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
      links.forEach((each: any) => {
        each.addEventListener("click", function () {
          const currentTarget = this.getAttribute("href");
          smoothScroll(currentTarget, 1000);
        });
      });
    };
    scrollTo();
  })();
  return (
    <div
      class={
        "fixed overflow-hidden bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out" +
        (open
          ? "transition-opacity  opacity-100 duration-500 translate-x-0"
          : "transition-all  opacity-0 translate-x-full")
      }
    >
      <section
        class={
          "w-screen max-w-lg right-0 absolute bg-white h-full shadow-xl duration-500 transform" +
          (open ? "translate-x-0 " : "translate-x-full ")
        }
      >
        {/* ico */}
        <div class="" onClick={() => setIsOpen(false)} id="nav-icon1">
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
        <article
          onClick={() => setIsOpen(false)}
          class="relative w-screen text-right px-10 text-3xl pt-5 max-w-lg pb-10 flex flex-col space-y-6 overflow-y-scroll h-full"
        >
          {/* {children} */}
          <A href="/">Home</A>
          <a href="#products">Our Products</a>
          <a href="#application">Contact the manager</a>
          <A href="/landing">landing</A>
          <A href="/Services">Services</A>
          <A href="/Marketing">Marketing</A>
          <A href="/GaponovAlexey">Owner</A>
        </article>
        {/* ico */}
      </section>
      <section
        class=" w-screen h-full cursor-pointer "
        onClick={() => setIsOpen(false)}
      ></section>
    </div>
  );
}

export default Burger;
