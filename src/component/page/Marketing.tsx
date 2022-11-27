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
              company experiences customer turnover. To encourage continued
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
                  <a href="#Links">Website Analytics</a>
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
                <div class={s.list_services}>
                  <GoogleAds />
                </div>
              </Match>
              <Match when={matches("SSR")}>
                <div class={s.list_services}>
                  <SSRpage />
                </div>
              </Match>
              <Match when={matches("TechnicalSEO")}>
                <div class={s.list_services}>
                  <SEOTeh />
                </div>
              </Match>
              <Match when={matches("Links")}>
                <div class={s.list_services}><WebsiteAnalytics  /></div>
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
const GoogleAds = () => {
  return (
    <div>
      Running an online business is no joke, especially when you have to compete
      with giants like Amazon that have an endless marketing budget fuelling
      their advertising. The race to reach the first page of Google search
      results is highly competitive. Trying to reach the first page, even with
      excellent SEO may easily take months or even a year.
      <br /> This is where paid ads (PPC) come in. Google AdWords is Google’s
      advertising service that allows businesses to display their ads on
      Google’s search result pages. The ads usually appear at the top or bottom
      of a Google SERPs (search engine result pages)
      <br />
      We help you with it.
    </div>
  );
};
const SSRpage = () => {
  return (
    <div>
      Why SSR?#
      <br /> Compared to a client-side Single-Page Application (SPA), the
      advantage of SSR primarily lies in: Faster time-to-content: this is more
      prominent on slow internet or slow devices. Server-rendered markup doesn't
      need to wait until all JavaScript has been downloaded and executed to be
      displayed, so your user will see a fully-rendered page sooner. In
      addition, data fetching is done on the server-side for the initial visit,
      which likely has a faster connection to your database than the client.
      This generally results in improved Core Web Vitals metrics, better user
      experience, and can be critical for applications where time-to-content is
      directly associated with conversion rate.
      <br />
      <br />
      Better SEO: the search engine crawlers will directly see the fully
      rendered page
      <br />
      We help you with it.
    </div>
  );
};
const SEOTeh = () => {
  return (
    <div>
      What is technical SEO?
      <br /> Technical SEO is all about improving the technical aspects of a
      website in order to increase the ranking of its pages in the search
      engines. Making a website faster, easier to crawl, and more understandable
      for search engines are the pillars of technical optimization. Technical
      SEO is part of on-page SEO, which focuses on improving elements on your
      website to get higher rankings. It’s the opposite of off-page SEO, which
      is about generating exposure for a website through other channels.
      <br />
      We help you with it.
    </div>
  );
};
const WebsiteAnalytics = () => {
  return (
    <div>
      What is technical Website analytics?
      <br />
      Website analytics tools collect data about a site’s visitors and their
      behavior. A good analytics tool can provide you tons of useful insights
      about your visitors, like which pages they visit, where they click, the
      problems they encounter, and much more.
      <br />
      We help you with it.
    </div>
  );
};

export default Marketing;
