import WhatsappButton from "@/components/Fab";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { NextSeo } from "next-seo";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function FeatureCard({ title, description }) {
  return (
    <div className="brand-feature">
      <div className="brand-feature-card-header flex items-start gap-3">
        <div>
          <img src="/images/bullet-point.png" alt="bullet-point-icon" />
        </div>
        <h3>{title}</h3>
      </div>
      <div className="brand-feature-content">
        <p className="text-black/50 title">{description}</p>
      </div>
    </div>
  );
}

function WhyUs() {
  return (
    <main className="w-full">
      <NextSeo
        title="Attrativa interior solution - Attrattiva"
        description="Attrattiva has great collection of luxury furniture, silver furniture, bone inlay furniture, tanjore painting. we have showrooms in Delhi | Noida | Gurugram"
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
      <Header activePage={1} />
      <div className="why-us-section mt-32 py-16 md:py-32 px-6  md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="why-us-section-gallery">
          <img
            src="/images/why-us.png"
            alt="pot"
            className="lg:h-full w-full  object-cover"
          />
        </div>
        <div className="why-us-section-text-content">
          <h1 className="text-4xl title">Why Us?</h1>
          <p className="text-black/50 mt-3">
            At{" "}
            <Link href="/" className="text-[#c29538]">
              Attrattiva
            </Link>
            , we have been providing our clients with quality craftsmanship and
            innovative solutions for 40+ years. We’ve built our reputation on a
            solid foundation of Integrity and Trust, the cornerstones of our{" "}
            <Link href="/story" className="text-[#c29538]">
              company’s values.
            </Link>
          </p>

          <div className="brand-features mt-12 flex flex-col items-start gap-8">
            <FeatureCard
              title=" 
ONE-STOP SOLUTION"
              description={
                "Save you the hassle of coordinating with a few professionals where miscommunication can cause costly errors. We take care of the from the concept to the installation, and therefore the entire process becomes effortless for the client."
              }
            />
            <FeatureCard
              title="ATTRACTIVE DESIGNS"
              description={
                "Extensive combined knowledge and experience of our team ensure we have plenty of ideas to create innovative and stylish solutions for your space. Our designers work with full dedication to achieve the look that is desired by our clients."
              }
            />
            <FeatureCard
              title=" 
EASY PROCESS"
              description={
                "We take care of the products from the conceptualisation till the installation, and therefor the entire process is effortless for the client."
              }
            />
            <FeatureCard
              title="ATTENTION TO DETAIL"
              description={
                "It is our attention to detail and the quality of the materials used which sets us apart from our competitors. We also share full product knowledge with our customers so they can make informed comparisons between our products and the mass-grade reproductions flooding the market."
              }
            />
            <FeatureCard
              title=" 
PROFESSIONAL & RELIABLE SERVICE"
              description={
                "Our main goal is to ensure our clients are happy and that we exceed your expectations. We strive to offer a tailored service to our clients, with high levels of professionalism and reliability."
              }
            />
            <FeatureCard
              title=" 
BESPOKE SOLUTIONS"
              description={
                "Make the most of our expertise in bespoke solutions. We tailor our solutions to cater to a wide range of discrete requirements."
              }
            />
            <FeatureCard
              title=" 
HIGH QUALITY "
              description={
                "At, Attrattiva we ensure to provide quality advice and suggestions suited to our clients specifications and budget. Our expertise lies in the blend of rich quality materials, with each one standing out."
              }
            />
          </div>
        </div>
      </div>
      <div className="founders-section w-[98%] lg:w-[95%] mx-auto py-16">
        <h2 className="text-3xl md:text-5xl text-center">Our Founders</h2>
        <div className="flex flex-col w-full items-start gap-32">
          <div className="founder-block w-full grid grid-cols-1 lg:grid-cols-6 my-12 gap-16 px-3 md:px-16">
            <div className="col-span-3">
              <p className="text-xl">
                Meet our founder, a seasoned Business Administration
                professional who discovered his true calling while building his
                dream home. Decades of factory floor experience, collaborating
                with skilled artisans, fueled his passion for furniture
                manufacturing. From this journey emerged a commitment to blend
                comfort and luxury in every home. &quot;Your comfort is our
                duty&quot; is not just a mission; it`s a philosophy ingrained in
                our founder`s vision. Welcome to a world where passion meets
                craftsmanship, and your home`s comfort is our utmost priority.
              </p>
            </div>
            <div className="col-span-3">
              <img
                src="/images/founders/founder.png"
                alt="founder-attrrattiva"
              />
            </div>
          </div>
          <div className="founder-block w-full grid grid-cols-1 lg:grid-cols-6 my-12 gap-16 px-3 md:px-16">
            <div className="col-span-3 w-full lg:h-[675px]">
              <img
                src="/images/founders/co-founder.jpg"
                alt="co-founder-attrattiva"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="col-span-3">
              <p className="text-xl">
                Meet one of our Co-Founders – a full-time problem solver and the
                backbone of our team. He`s like the calm captain steering our
                ship, making sure everything runs smoothly and we deliver
                top-notch quality to our clients. At 45, he started this
                exciting journey with us, bringing loads of passion, hard work,
                and creativity. He`s not just a boss; he`s the kind of leader
                who personally checks every piece of furniture to ensure it`s
                perfect. His energy and encouragement motivate everyone in our
                Attrattiva family to learn and grow every day. Cheers to the
                heart and soul of our team!
              </p>
            </div>
          </div>
        </div>
      </div>
      <WhatsappButton />
      <Footer />
    </main>
  );
}

export default WhyUs;
