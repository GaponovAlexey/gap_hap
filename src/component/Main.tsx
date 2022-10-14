import s from "../scss/main.module.scss";

const Main = () => {
  return (
    <div>
      <MainPageOne />
      <MainPageTwo />
      <MainPageThree/>
    </div>
  );
};

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

const MainPageTwo = () => {
  return (
    <div class={s.container_main_two}>
      <div class={s.img}>s</div>
      <div>
        <div>lending</div>
        <div>web Services</div>
        <div>Marketing</div>
      </div>
    </div>
  );
};

const MainPageThree = () => {
  return (
    <div class={s.container_main_three} >
       <div class={s.img}>s</div>
       <div>three</div>
    </div>
  )
}

export default Main;
