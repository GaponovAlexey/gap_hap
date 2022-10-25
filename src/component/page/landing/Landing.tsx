import s from "../../../scss/landing.module.scss";
import CreateTask from "../../Aplication/Application";
import LandingUse from "./LandingUse";

const Lending = () => {
  return (
    <div class={s.landing_main}>
      <LandingUse />
      <div class={s.landing_top}></div>
      <div class={s.landing_top}>
        <CreateTask />
      </div>
    </div>
  );
};

export default Lending;
