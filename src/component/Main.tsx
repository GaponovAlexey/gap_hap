import { createEffect } from "solid-js";
import s from "../scss/main.module.scss";
import AppliMap from "./page/AppliMap";
import LandingUse from "./page/LandingUse";
import Marketing from "./page/Marketing";
import CustomBut from "./utils/CustomBut";

const Main = () => {
  SlowScroll();
  return (
    <div>
      <MainPageOne />
      <PageWhite />
      <LandingUse />
      <MainPageFour />
      <AppliMap />
      <Marketing />
    </div>
  );
};

//one
const MainPageOne = () => {
  return (
    <section class={s.container_main}>
      <div id="home">
        <h3>The development company</h3>
        <h1>Sitesess.ca</h1>
        <h2>We Know You Are Passionate About Your Small Business</h2>
        <h4>We help businesses turn ideas into effective products</h4>
        <div class="text-center pt-10 hover:scroll-auto">
          <a href="#application" class="js-scroll ">
            <CustomBut name="Connect us" />
          </a>
        </div>
      </div>
      <div class={s.main_img}></div>
    </section>
  );
};
//2
const PageWhite = () => {
  return (
    <div class={s.main_white}>
      <h3>
        But, sometimes it may feel like you are doing it alone. Good news,
        you’re not! <br />
        We are here to help you with all those things you may not be able to do
        yourself, such as web development and marketing
      </h3>
      <div />
    </div>
  );
};

//4
const MainPageFour = () => {
  return (
    <div id="strengths" class={s.container_main_four}>
      <div class={s.img}>
        <div class={s.skills}>
          <div>
            <h2>Our strengths</h2>
            <ul class={s.skills_element}>
              <li class={s.one}>We provide a high level of performance</li>
              <li class={s.two}>We guarantee the quality of work</li>
              <li class={s.three}>We make our job quickly</li>
              <li class={s.four}>We ensure the flow of applications</li>
              <li class={s.five}>We automate process</li>
              <li class={s.six}>We develop a unique design</li>
              <li class={s.seven}>We write a clean code</li>
              <li class={s.eight}>We use contextual advertising</li>
              <li class={s.nine}>We use targeted advertising</li>
            </ul>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
//5

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
export default Main;
