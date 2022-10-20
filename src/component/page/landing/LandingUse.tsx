import s from "../../../scss/landing.module.scss";
const LandingUse = () => {
  return (
    <section class={s.landing_use}>
      <div>
        <div class={s.landing_use_top}>
          <h2 class="text-xl text-indigo-400 tracking-widest font-medium  mb-1">
            Why you need a website for your small business
          </h2>
          <h1 class="sm:text-3xl text-2xl font-medium title-font  mb-4 text-white">
            A website makes you look professional
          </h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed ">
            84% of today’s consumers think a website makes your business more
            credible than companies who only have social media profiles. Your
            website is also the perfect place to show off any professional
            certifications or awards your business has.
          </p>
        </div>
        <div class={s.landing_use_bottom}>
          <div>
            {/* 2 */}
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
          <div>
            {/* 3 */}
            <h2>You can clearly showcase your products and services</h2>
            <p>
              You can show potential customers what they’ll get when they work
              with you by displaying high-quality photography on your website.{" "}
              <br />
              You can also use your website design, along with the featured
              images, to give people a sense of what it feels like to enter your
              physical location. This works particularly well if your brand is
              closely tied to the “feel” of your location, like the Canadian
              restaurant
            </p>
          </div>
          <div>
            {/* 4 */}
            <h2>Neptune</h2>
            <p>
              Fingerstache flexitarian street art 8-bit waistcoat. Distillery
              hexagon disrupt edison bulbche.
            </p>
          </div>
          <div>
            <h2>Melanchole</h2>
            <p>
              Fingerstache flexitarian street art 8-bit waistcoat. Distillery
              hexagon disrupt edison bulbche.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingUse;
