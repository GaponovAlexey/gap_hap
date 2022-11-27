import { Component } from "solid-js";
import { Motion } from "@motionone/solid";
import CustomBut from "../utils/CustomBut";
import s from "../../scss/main.module.scss";

const MainPageOne: Component = () => {
  return (
    <div class={s.container_main}>
      <div id="home">
        <Motion.h3
        
        >The development company</Motion.h3>
        <Motion.h1
          initial={{ y: -400 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Sitesess.ca
        </Motion.h1>
        <h2>We Know You Are Passionate About Your Small Business</h2>
        <h4>We help businesses turn ideas into effective products</h4>
        <div class="text-center pt-10 hover:scroll-auto">
          <a href="#application" class="js-scroll ">
            <CustomBut name="Connect us" />
          </a>
        </div>
      </div>
      <div class={s.main_img}></div>
    </div>
  );
};

export default MainPageOne;
