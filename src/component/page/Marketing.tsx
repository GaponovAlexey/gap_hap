import { Match, Switch } from "solid-js"
import s from "../../scss/main.module.scss"
import { createRouteHandler } from "../utils/matches"

const matches = createRouteHandler()

const Marketing = () => {
  return (
    <>
      <div id="marketing" class="main_marketing">
        <div class={s.marketing_map}></div>
      </div>
    </>
  )
}

// const Facebook = () => {
//   return (
//     <div>
//       The campaign strength score is calculated from various factors including
//       your campaign and ad settings, current campaign performance and analysis
//       of performance potential for each recommendation that is relevant for your
//       campaign. Campaign strength and its accompanying recommendations can
//       change due to trends in the ads ecosystem and edits to your campaign
//       setup.
//       <br />
//       We help you with it.
//     </div>
//   )
// }
// const GoogleAds = () => {
//   return (
//     <div>
//       Running an online business is no joke, especially when you have to compete
//       with giants like Amazon that have an endless marketing budget fuelling
//       their advertising. The race to reach the first page of Google search
//       results is highly competitive. Trying to reach the first page, even with
//       excellent SEO may easily take months or even a year.
//       <br /> This is where paid ads (PPC) come in. Google AdWords is Google’s
//       advertising service that allows businesses to display their ads on
//       Google’s search result pages. The ads usually appear at the top or bottom
//       of a Google SERPs (search engine result pages)
//       <br />
//       We help you with it.
//     </div>
//   )
// }
// const SSRpage = () => {
//   return (
//     <div>
//       Why SSR?#
//       <br /> Compared to a client-side Single-Page Application (SPA), the
//       advantage of SSR primarily lies in: Faster time-to-content: this is more
//       prominent on slow internet or slow devices. Server-rendered markup doesn't
//       need to wait until all JavaScript has been downloaded and executed to be
//       displayed, so your user will see a fully-rendered page sooner. In
//       addition, data fetching is done on the server-side for the initial visit,
//       which likely has a faster connection to your database than the client.
//       This generally results in improved Core Web Vitals metrics, better user
//       experience, and can be critical for applications where time-to-content is
//       directly associated with conversion rate.
//       <br />
//       <br />
//       Better SEO: the search engine crawlers will directly see the fully
//       rendered page
//       <br />
//       We help you with it.
//     </div>
//   )
// }
// const SEOTeh = () => {
//   return (
//     <div>
//       What is technical SEO?
//       <br /> Technical SEO is all about improving the technical aspects of a
//       website in order to increase the ranking of its pages in the search
//       engines. Making a website faster, easier to crawl, and more understandable
//       for search engines are the pillars of technical optimization. Technical
//       SEO is part of on-page SEO, which focuses on improving elements on your
//       website to get higher rankings. It’s the opposite of off-page SEO, which
//       is about generating exposure for a website through other channels.
//       <br />
//       We help you with it.
//     </div>
//   )
// }
// const WebsiteAnalytics = () => {
//   return (
//     <div>
//       What is technical Website analytics?
//       <br />
//       Website analytics tools collect data about a site’s visitors and their
//       behavior. A good analytics tool can provide you tons of useful insights
//       about your visitors, like which pages they visit, where they click, the
//       problems they encounter, and much more.
//       <br />
//       We help you with it.
//     </div>
//   )
// }

export default Marketing
