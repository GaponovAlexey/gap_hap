import s from "../scss/main.module.scss";

const Main = () => {
  return (
    <div>
      <MainPageOne />
      <MainPageTwo />
      <MainPageThree />
      <MainPageFour />
      <MainPageFive />
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
            <h2>Benefits</h2>
            <ul class={s.skills_element}>
              <li class={s.one}>High level of performance</li>
              <li class={s.two}>We guarantee the quality of work</li>
              <li class={s.three}>Get job quickly</li>
              <li class={s.four}>We will ensure the flow of applications</li>
              <li class={s.five}>We automate work</li>
              <li class={s.six}>We will develop a unique design</li>
              <li class={s.seven}>Let's write a clean the code</li>
              <li class={s.eight}>Contextual advertising</li>
              <li class={s.nine}>Treated advertising</li>
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
        <div>our </div>
      </div>
    </div>
  );
};
export default Main;
