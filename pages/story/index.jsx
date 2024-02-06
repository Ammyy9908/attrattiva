import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { NextSeo } from "next-seo";
import Link from "next/link";
import React from "react";

function Story() {
  return (
    <main className="h-screen">
      <NextSeo
        title="Best Home Decor, Furniture Showroom in Delhi, Noida, Gurgaon - Attrattiva"
        description="We have the best Bespoke Furniture Showroom in Delhi, Noida and Gurgaon. Our products include Silver Artefacts, Semi-precious stone furniture, Marble God Statue, Bone inlay furniture, Gold Furniture, Tanjore paintings, etc."
        openGraph={{
          type: "article",
          locale: "en_IE",
          url: "https://attrattiva.vercel.app",
          site_name: "Attrattiva - Luxury Furniture",
          title: "Luxury Furniture Showroom Delhi | Gurgaon - Attrattiva",
        }}
        twitter={{
          handle: "@handle",
          title: "Luxury Furniture Showroom Delhi | Gurgaon - Attrattiva",
          site: "@site",
          cardType: "summary",
        }}
      />
      <Header activePage={2} />
      <div className="story__top__section py-32 px-6 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-32 md-16 md:mt-32">
        <img src="/images/attrattive_story.png" alt="story__hero__image" />
        <div className="story__top__section__content">
          <h1 className="text-5xl title">Our Story</h1>
          <div className="mt-3">
            <p className="text-xl">
              <span className="title">Your</span> home should tell the story of
              who you are, and be a collection of what you love.
            </p>
            <p className="text-xl">
              An intuitive eye for quality, detail, and presentation, has always
              believed in pushing the boundaries especially when it comes to
              redefining affordable luxury interiors.{" "}
              <Link href={"/"} className="font-bold text-[#c29538]">
                Attrattiva
              </Link>{" "}
              is the leading name in the market having experience of more than
              40+ years who have gained huge success by manufacturing, supplying
              and exporting an unmatched and remarkable gamut of Luxury Products
              of Interior & Exterior Designing. Our range of products includes
              Bespoke Furniture (wood & metal),{" "}
              <Link href={"/"} className="font-bold text-[#c29538]">
                Home décor and Art
              </Link>
              , Tanjore paintings, Modern art and paintings,{" "}
              <Link href={"/"} className="font-bold text-[#c29538]">
                Semi-Precious inlay work
              </Link>
              , God figures, Silver artefacts and furniture, Pichwai art and
              painting. We are also engaged in providing Interior solutions such
              as space planning. In a short span of time, encouraged and backed
              by experienced craftsmen we have created a niche market for
              ourselves and completed several prestigious projects.
            </p>
            <p className="text-xl">
              Our aim is to promote good customized designs, which includes
              comfort, strength, durability, visual satisfaction, functional &
              structural benefits. Moreover, our promise is to provide our
              clients with Italian quality products that are purely made in
              India. We give unwavering attention to the designs in detail,
              irrespective of the complexity of the project. We have a deep
              commitment towards total quality management and we continuously do
              that by upgrading ourselves both in terms of workforce and
              technology.
            </p>
          </div>
        </div>
      </div>
      <section
        className="mission_and_vission_section py-32 px-6 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-32"
        style={{
          backgroundImage: `url("/images/BG-GREY.jpg")`,
          backgroundSize: "cover",
        }}
      >
        <div>
          <h2 className="text-3xl font-bold title text-[#c29538]">
            Our Mission
          </h2>
          <p className="text-black/60 mt-3 text-xl">
            To offer the customer a product that perfectly blends imagination
            with simplicity, elegance with comfort and exclusivity with
            affordability by effective utilization of our design, procurement &
            manufacturing skills.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-bold title text-[#c29538]">
            Our Vision
          </h2>
          <p className="text-black/60 mt-3 text-xl">
            Our vision is to be a leading Luxury products company offering
            innovative and superior quality products.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default Story;
