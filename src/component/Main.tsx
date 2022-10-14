import { A } from "@solidjs/router";
import s from "../scss/main.module.scss";

const Main = () => {
  return (
    <section class={s.container_main}>
      <div>
        <div>Tools for any task</div>
        <div class="flex justify-around text-blue-700">
          <A href="/">one</A>
          <A href="/two">two</A>
        </div>
      </div>
    </section>
  );
};

export default Main;
