import s from "../../scss/marketing.module.scss";

const Marketing = () => {
  return (
    <>
      <div class={s.main_marketing}>
        <div class={s.marketing_page}>
          <div class={s.marketing_top_page}>
            <section>
              <h3>Paid Search</h3>
              <ul>
                <li>Facebook Ads</li>
                <li>Bind Ads</li>
                <li>Google Ads</li>
              </ul>
            </section>
            <section>
              <h3>Content Marketing</h3>
              <ul>
                <li>Website</li>
                <li>Magazine</li>
                <li>Video</li>
              </ul>
            </section>
            <section>
              <h3>SEO</h3>
              <ul>
                <li>Technical SEO</li>
                <li>Links</li>
                <li>SSR</li>
                <li>Content Marketing</li>
                <li>Conversion Rate Optimization</li>
                <li>On-Page Optimization</li>
              </ul>
            </section>
          </div>
        </div>
        <div class={s.marketing_page}>marketing</div>
        <div class={s.marketing_map}>
          <div class={s.marketing_bot_content}>
            <p>We work while you relax</p>
          </div>
          <img />
        </div>
      </div>
    </>
  );
};

export default Marketing;
