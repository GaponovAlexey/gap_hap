import s from "../../../scss/landing.module.scss";
const LandingUse = () => {
  return (
    <section class={s.landing_use}>
      <div>
        <div class={s.landing_use_top}>
          <h2>Why you need a website for your small business</h2>
          <h1>A website makes you look professional</h1>
          <p>
            84% of today’s consumers think a website makes your business more
            credible than companies who only have social media profiles. Your
            website is also the perfect place to show off any professional
            certifications or awards your business has.
          </p>
        </div>
        <div class={s.landing_use_bottom}>
          {/* 1 */}
          <div>
            <h2>You can clearly showcase your products and services</h2>
            <p>
              You can show potential customers what they’ll get when they work
              with you by displaying high-quality photography on your website.
            </p>
          </div>
          {/* 2 */}
          <div>
            <h2>
              You can display your best reviews and testimonials prominently on
              your website
            </h2>
            <p>
              Displaying your best reviews and/or testimonials prominently on
              your website is a great way to establish social proof. This might
              come in the form of personal customer testimonials
            </p>
          </div>
          {/* 3 */}
          <div>
            <h2>A website can encourage customers to contact you</h2>
            <p>
              A website is a great place to make your contact information easily
              available to potential customers.
            </p>
          </div>
          {/* 4 */}
          <div>
            <h2>
              You can integrate your website with Google Maps so people can find
              you more easily
            </h2>
            <p>A website lets you embed maps directly into your content.</p>
          </div>
          {/* 5 */}
          <div>
            <h2>Your website establishes your place in your industry</h2>
            <p>
              As of 2022, 71% of small businesses have websites and 81% of
              customers research things online before they buy them. In other
              words, if your competitors are online and you’re not, those
              competitors get the first interactions with customers.
            </p>
          </div>
          {/* 6 */}
          <div>
            <h2>Having a website will end up saving you time.</h2>
            <p>
              Whether you’re trading emails, taking calls, or sending out
              proposals – communicating with potential customers takes time.
              Your website can save you that time by providing answers to common
              customer questions and inquiries. What does this mean for you? You
              can spend your time doing more valuable things.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingUse;
