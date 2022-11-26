import { createEffect, lazy } from "solid-js";
import s from "../scss/main.module.scss";
import CustomBut from "./utils/CustomBut";
import { Component } from "solid-js";
import { Motion } from "@motionone/solid";

//lazy
const AppliMap = lazy(async () => {
  await new Promise((r) => setTimeout(r, 500));
  return import("./page/AppliMap");
});
const LandingUse = lazy(() => import("./page/LandingUse"));
const Marketing = lazy(() => import("./page/Marketing"));
const OurStrengths = lazy(() => import("./page/OurStrengths"));

const Main = () => {

  
  SlowScroll();
  return (
    <>
      <MainPageOne />
      <PageWhite />
      <LandingUse />
      <OurStrengths />
      <AppliMap />
      <Marketing />
    </>
  );
};

//one
const MainPageOne: Component = () => {
  return (
    <div class={s.container_main}>
      <div id="home">
        <h3>The development company</h3>
        <Motion.h1  animate={{ rotate: 2 }}>Sitesess.ca</Motion.h1>
        <h2>We Know You Are Passionate About Your Small Business</h2>
        <h4>We help businesses turn ideas into effective products</h4>
        <div class="text-center pt-10 hover:scroll-auto">
          <a href="#application" class="js-scroll ">
            <CustomBut name="Connect us" />
          </a>
        </div>
      </div>
      <div class={s.main_img}></div>
    </div>
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
