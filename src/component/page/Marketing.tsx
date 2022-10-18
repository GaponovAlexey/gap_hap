import { Match, Switch } from "solid-js";
import s from "../../scss/marketing.module.scss";
import { createRouteHandler } from "../utils/matches";

//matches router
const matches = createRouteHandler();

const Marketing = () => {
  return (
    <>
      <div class={s.main_marketing}>
        <div class={s.marketing_page}>
          <div class={s.marketing_top_page}>
            <section>
              <h3>Paid Search</h3>
              <ul>
                <li>
                  <a href="#FacebookAds"> Facebook Ads</a>
                </li>
                <li>
                  <a href="#BindAds">Bind Ads</a>
                </li>
                <li>
                  <a href="#GoogleAds">Google Ads</a>
                </li>
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
                <li>SSR</li>
                <li>Technical SEO</li>
                <li>Links</li>
                <li>Content Marketing</li>
                <li>Conversion Rate Optimization</li>
                <li>On-Page Optimization</li>
              </ul>
            </section>
          </div>
          <div class={s.info_marketing_services}>
            <Switch fallback={<p>start</p>}>
              <Match when={matches("FacebookAds")}>
                <div>Facebook Ads</div>
              </Match>
              <Match when={matches("BindAds")}>
                <div>Bind Ads</div>
              </Match>
              <Match when={matches("GoogleAds")}>
                <div>Google Ads</div>
              </Match>
              <Match when={matches("BindAds")}>
                <div>page three</div>
              </Match>
              <Match when={matches("marketing")}>
                <div>page three</div>
              </Match>
              <Match when={matches("marketing")}>
                <div>page three</div>
              </Match>
              <Match when={matches("marketing")}>
                <div>page three</div>
              </Match>
              <Match when={matches("marketing")}>
                <div>page three</div>
              </Match>
            </Switch>
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
