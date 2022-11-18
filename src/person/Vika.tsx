import s from "../scss/personal.module.scss";

const Viktoria = () => {
  return (
    <div class={s.personal}>
      <div class={s.wrapper}>
        <div class={s.top_block}>
          <div>
            <h1>Viktoria Karpova</h1>
            <h2>Design and Client Relations Manager at Sitesess.ca</h2>
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

export default Viktoria;
