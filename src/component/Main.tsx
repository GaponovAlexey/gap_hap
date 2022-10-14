import s from "../scss/main.module.scss";

const Main = () => {
  return (
    <section class={s.container_main}>
      <div>
        <div>Tools for any task</div>
        <div class="flex justify-around text-blue-700"></div>
      </div>
    </section>
  );
};

export default Main;
