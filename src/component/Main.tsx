import { createEffect, Match, Switch } from "solid-js";
import s from "../scss/main.module.scss";
import Application from "./Aplication/Application";
import { createRouteHandler } from "./utils/matches";

const matches = createRouteHandler();
const Main = () => {
  SlowScroll()
  return (
    <div>
      <MainPageOne />
      <PageWhite />
      {/* <PageWorld /> */}
      <MainPageTwo />
      <MainPageFour />
      <Application />
      <MainPageFive />
    </div>
  );
};

//one
const MainPageOne = () => {
  return (
    <section class={s.container_main}>
      <div class="">
        <h3>The development company</h3>
        <h1>Sitesess.ca</h1>
        <h2>We Know You Are Passionate About Your Small Business</h2>
        <h4>We help businesses turn ideas into effective products</h4>
        <div class="text-center pt-10 hover:scroll-auto">
          <a href="#application" class="js-scroll">Connect project manager</a>
        </div>
      </div>
      <div class={s.main_img}></div>
    </section>
  );
};
//2
const PageWhite = () => {
  return (
    <div  class={s.main_white}>
      <h3>
        But, sometimes it may feel like you are doing it alone. Good news,
        you’re not! we are here to help you with all those things you may not be
        able to do yourself, such as web development and marketing
      </h3>
      <div />
    </div>
  );
};

const MainPageTwo = () => {
  return (
    <div id='products' class={s.container_main_two}>
      <div class={s.img} />
      <span>
        <h2>Your website is costing you customers</h2>
        <h3>We can make you</h3>
        <ul>
          <a href="#landing">landing</a>
          <a href="#webServices">Web Services</a>
          <a href="#marketing">Digital</a>
        </ul>
        <div class={s.services}>
          <Switch fallback={<Landing />}>
            <Match when={matches("landing")}>
              <Landing />
            </Match>
            <Match when={matches("webServices")}>
              <WebServices />
            </Match>
            <Match when={matches("marketing")}>
              <Marketing />
            </Match>
          </Switch>
        </div>
      </span>
    </div>
  );
};

const Landing = () => (
  <div class={s.two_text_services}>
    <p>
      Landing pages keep visitors focused on the specific thing you want them to
      do, getting you better results with the same campaign budget.
    </p>
    <p>
      Unlike web pages, which typically have many goals and encourage
      exploration, landing pages are designed with a single focus or goal, known
      as a call to action (or CTA, for short)
    </p>
    <p>
      It’s this focus that makes landing pages the best option for increasing
      the conversion rates of your marketing campaigns and lowering your cost of
      acquiring a lead or sale.
    </p>
    <p class={s.but}>
      {/* <CustomA name="Contact manager" path="landing" /> */}
      <a href="#application" class="js-scroll">Connect project manager</a>
    </p>
  </div>
);

const WebServices = () => (
  <div class={s.two_text_services}>
    <p>
      A Web service is any software, application or cloud technology system
      built for interoperable machine-to-machine or application-to-application
      interaction over a network. They allow different applications to
      seamlessly communicate and share data with each other.
    </p>
    <p>
      Web services provide a common platform that allows multiple applications
      built on various programming languages to have the ability to communicate
      with each other.
    </p>
    <p>We will advise you and find the best solution for you</p>
    <p class={s.but}>
      <a href="#application" class="js-scroll">Connect project manager</a>
    </p>
  </div>
);

const Marketing = () => (
  <div class={s.two_text_services}>
    <p>
      Digital marketing is the promotion of a company and its products or
      services through online tools that generate leads, drive traffic, and
      boost sales.
    </p>
    <p>
      Now, businesses can target their audience with pinpoint accuracy and
      provide useful information that resonates.
    </p>
    <p>
      This is perfect because that’s exactly what today’s consumers want. People
      don’t want to hear about products and services that don’t interest them.
    </p>
    <p class={s.but}>
      <a href="#application" class="js-scroll">Connect project manager</a>
    </p>
  </div>
);

//4
const MainPageFour = () => {
  return (
    <div class={s.container_main_four}>
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
const MainPageFive = () => {
  return (
    <div class={s.container_main_five}>
      <div class={s.img}>
        <div class={s.wrap}>
          <h2>Our advantages</h2>
          <ul class={s.wrap_advantages}>
            <li class={s.one}>
              We will make an adaptive design for any type of device
            </li>
            <li class={s.two}>
              We will install analytics counters on the site and set up the
              ability to track the results directly from your mobile phone
            </li>
            <li class={s.three}>
              We will set up all possible feedback methods: mail, online
              consultant, phone call from the site,{" "}
              <span class="text-[#48C857]">WhatsApp</span>,
              <span class="text-[#29A9EB]">Telegram</span> connected to the site
            </li>
            <li class={s.four}>
              We will analyze your industry and competitors, offer the best
              tools for promotion on the Internet
            </li>
          </ul>
        </div>
      </div>
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
