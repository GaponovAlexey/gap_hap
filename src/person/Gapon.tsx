import s from "../scss/personal.module.scss";

const Gapon = () => {
  return (
    <div class={s.personal}>
      <div class={s.wrapper}>
        <div class={s.top_block}>
          <div>
            <h1>Alexey Gaponov</h1>
            <h2>Owner of Developer Experience at Sitesess.ca</h2>
            <h3>
              Where we develop technologies that empower for business and
              celebrity
            </h3>
          </div>
          <div class={s.top_img}></div>
        </div>
      </div>
    </div>
  );
};

export default Gapon;
