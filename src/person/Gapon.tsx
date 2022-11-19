import s from "../scss/personal.module.scss";

const Gapon = () => {
  return (
    <div class={s.personal_a}>
      <div class={s.wrapper}>
        <div class={s.top_block}>
          <div>
            <div class={s.top_img}></div>
            <h1>Alexey Gaponov</h1>
            <h2>Main developer at Sitesess.ca</h2>
            <h3>
              Full-Stack developer with over two years of experience in web
              applications development. Have expertise in building applications
              from scratch. Developed applications for different fields such as
              e-commerce, medicine, retail, marketing, statistics, data
              management and processing.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gapon;
