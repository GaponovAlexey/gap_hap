import { lazy } from "solid-js";
import s from "../scss/main.module.scss";
import AppliMap from "./page/AppliMap";
import LandingUse from "./page/LandingUse";
import MainPageOne from "./page/MainPageOne";
import Marketing from "./page/Marketing";
import OurStrengths from "./page/OurStrengths";


//lazy
// const AppliMap = lazy(async () => {
//   await new Promise((r) => setTimeout(r, 500));
//   return import("./page/AppliMap");
// });
// const LandingUse = lazy(() => import("./page/LandingUse"));
// const Marketing = lazy(() => import("./page/Marketing"));
// const OurStrengths = lazy(() => import("./page/OurStrengths"));

const Main = () => {
  console.log("init")
  
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



export default Main;
