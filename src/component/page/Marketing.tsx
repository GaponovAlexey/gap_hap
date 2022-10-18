import s from "../../scss/marketing.module.scss";

const Marketing = () => {
  return (
    <>
      <div class={s.main_marketing}>
        <div class={s.marketing_page}></div>
        <div class={s.marketing_page}>marketing</div>
        <div class={s.marketing_page}>marketing</div>
        <div class={s.marketing_map}>
          <div class={s.marketing_top_content}>
            <p>we work while you relax</p>
          </div>
          <img />
        </div>
      </div>
    </>
  );
};

export default Marketing;
