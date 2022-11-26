import { Match, Switch } from "solid-js";
import s from "../../scss/main.module.scss";
import { createRouteHandler } from "../utils/matches";

const matches = createRouteHandler();

const Marketing = () => {
  return (
    <>
      <div id="marketing" class={s.main_marketing}>
        <div class={s.marketing_page}>
          <div class={s.marketing_info}>
            <h2>Your website can attract new customers through Google</h2>
            <p>
              You may be happy with the current size of your business, but every
              company experiences customer turnover.> <br/> To encourage continued
              success, you need to attract new customers, and one of the best
              ways to do it is by making yourself more visible on Google. Social
              media networks are indexed on Google, and social media posts can
              be found with the search engine, but a website gives you access to
              many more tools and strategies for Search Engine Optimization
              (SEO). And SEO is the key to making your business appear on the
              front page of Google.
            </p>
          </div>
          <div class={s.marketing_top_page}>
            <section>
              <h3>
                <span class="text-orange-400">#</span>Paid Search
              </h3>
              <ul>
                <li class="w-4/5 mx-auto">
                  <a
                    class="hover:bg-blue-600 transition-all duration-200 delay-200 "
                    href="#FacebookAds"
                  >
                    Facebook Ads
                  </a>
                </li>
                <li>
                  <a href="#GoogleAds">Google Ads</a>
                </li>
              </ul>
            </section>
            <section>
              <h3>
                <span class="text-blue-400">#</span>SEO
              </h3>
              <ul>
                <li>
                  <a href="#SSR">SSR</a>
                </li>
                <li>
                  <a href="#TechnicalSEO">Technical SEO</a>
                </li>
                <li>
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
                <div class={s.list_services}>
                  <Facebook />
                </div>
              </Match>
              <Match when={matches("GoogleAds")}>
                <div class={s.list_services}>Google Ads</div>
              </Match>
              <Match when={matches("SSR")}>
                <div class={s.list_services}>SSR</div>
              </Match>
              <Match when={matches("TechnicalSEO")}>
                <div class={s.list_services}>Technical SEO</div>
              </Match>
              <Match when={matches("Links")}>
                <div class={s.list_services}>Links</div>
              </Match>
            </Switch>
          </div>
        </div>
        <div class={s.marketing_map}>
          <div class={s.marketing_bot_content}></div>
        </div>
      </div>
    </>
  );
};

const Facebook = () => {
  return (
    <div>
      The campaign strength score is calculated from various factors including
      your campaign and ad settings, current campaign performance and analysis
      of performance potential for each recommendation that is relevant for your
      campaign. Campaign strength and its accompanying recommendations can
      change due to trends in the ads ecosystem and edits to your campaign
      setup.
      <br />
      We help you with it.
    </div>
  );
};

export default Marketing;
