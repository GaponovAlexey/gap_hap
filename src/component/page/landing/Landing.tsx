import s from "../../../scss/landing.module.scss";
import LandingUse from "./LandingUse";

const Lending = () => {
  return (
    <div class={s.landing_main}>
      <LandingUse />
      <div class={s.landing_top}>
        <div></div>
      </div>
      {/* <div class={s.landing_top}>da</div> */}
    </div>
  );
};

export default Lending;
