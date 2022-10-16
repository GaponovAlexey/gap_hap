import s from "../scss/main.module.scss";

const Main = () => {
  return (
    <div>
      <MainPageOne />
      <MainPageTwo />
      {/* <MainPageThree /> */}
      <MainPageFour />
      {/* <MainPageFive /> */}
    </div>
  );
};

//one
const MainPageOne = () => {
  return (
    <section class={s.container_main}>
      <div>
        <div class="pt-10 text-2xl">Tools for any task</div>
        <div class="flex justify-around text-blue-700"></div>
      </div>
    </section>
  );
};
//2
const MainPageTwo = () => {
  return (
    <div class={s.container_main_two}>
      <div class={s.img} />
      <div>
        <div>lending</div>
        <div>web Services</div>
        <div>Marketing</div>
      </div>
    </div>
  );
};
//3
const MainPageThree = () => {
  return (
    <div class={s.container_main_three}>
      <div class={s.img} />
      <div>three s</div>
    </div>
  );
};
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
              We will set up all possible feedback methods: mail,
              online consultant, phone call from the site,
               Whatsapp connected to the site
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
export default Main;
