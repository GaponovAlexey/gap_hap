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
                  <span class="text-orange-400"># </span>
                  <a href="#FacebookAds"> Facebook Ads</a>
                </li>
                <li>
                  <span class="text-orange-400"># </span>
                  <a href="#BindAds">Bind Ads</a>
                </li>
                <li>
                  <span class="text-orange-400"># </span>
                  <a href="#GoogleAds">Google Ads</a>
                </li>
              </ul>
            </section>
            <section>
              <h3>Content Marketing</h3>
              <ul>
                <li>
                  <span class="text-green-400"># </span>
                  <a href="#Website">Website</a>
                </li>
                <li>
                  <span class="text-green-400"># </span>
                  <a href="#Magazine">Magazine</a>
                </li>
                <li>
                  <span class="text-green-400"># </span>
                  <a href="#Video">Video</a>
                </li>
              </ul>
            </section>
            <section>
              <h3>SEO</h3>
              <ul>
                <li>
                  <span class="text-blue-400"># </span>
                  <a href="#SSR">SSR</a>
                </li>
                <li>
                  <span class="text-blue-400"># </span>
                  <a href="#TechnicalSEO">Technical SEO</a>
                </li>
                <li>
                  <span class="text-blue-400"># </span>
                  <a href="#Links">Link building</a>
                </li>
              </ul>
            </section>
          </div>
          <div class={s.info_marketing_services}>
            <Switch
              fallback={<p class={s.list_services}>Hello who you need</p>}
            >
              <Match when={matches("FacebookAds")}>
                <div class={s.list_services}>Facebook Ads</div>
              </Match>
              <Match when={matches("BindAds")}>
                <div class={s.list_services}>Bind Ads</div>
              </Match>
              <Match when={matches("GoogleAds")}>
                <div  class={s.list_services}>Google Ads</div>
              </Match>
              <Match when={matches("Website")}>
                <div class={s.list_services}>Website</div>
              </Match>
              <Match when={matches("Magazine")}>
                <div class={s.list_services}>Magazine</div>
              </Match>
              <Match when={matches("Video")}>
                <div class={s.list_services}>Video</div>
              </Match>
              <Match when={matches("SSR")}>
                <div class={s.list_services}>SSR</div>
              </Match>
              <Match when={matches("TechnicalSEO")}>
                <div class={s.list_services}>TechnicalSEO</div>
              </Match>
              <Match when={matches("Links")}>
                <div class={s.list_services}>Links</div>
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
