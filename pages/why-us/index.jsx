import Footer from "@/components/Footer";
import Header from "@/components/Header";
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
      <Header />
      <div className="why-us-section mt-32 py-16 md:py-32 px-6  md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="why-us-section-gallery">
          <img src="/images/artifacr100-985x1024.jpg" alt="pot" />
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
      <Footer />
    </main>
  );
}

export default WhyUs;
