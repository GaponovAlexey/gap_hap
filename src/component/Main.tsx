import { A } from "@solidjs/router";
import s from "../scss/main.module.scss";

const Main = () => {
  return (
    <>
      <div class="flex justify-around text-blue-700">
        <A href="/">one</A>
        <A href="/two">two</A>
      </div>
    </>
  );
};

export default Main;
