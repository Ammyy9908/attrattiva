import BlogCard from "@/components/BlogCard";
import WhatsappButton from "@/components/Fab";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import blogs from "@/data/blogs";
import { NextSeo } from "next-seo";

function Blogs() {
  return (
    <main>
      <NextSeo
        title="Best Home Luxury Furniture Showroom in Delhi- ATTRATTIVA"
        description="We have a range of Luxury Sofa Set, Tanjore Paintings, Silver bed, Silver Artifacts &amp; Furniture, Luxury Bed, Luxury Furniture, Luxury Dining Table."
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
      <Header activePage={4} />
      <div
        className="flex md:hidden page-hero-section h-[540px] w-full items-center justify-center relative"
        style={{
          backgroundImage: `url("/images/journal.jpg")`,
          backgroundSize: "cover",
        }}
      >
        <div className="overlay absolute w-full h-full bg-orange-300/50 z-20 flex items-center justify-center">
          <h1 className="text-white text-6xl title">Journal</h1>
        </div>
      </div>
      <div
        className="hidden md:flex page-hero-section h-[540px] w-full items-center justify-center relative"
        style={{
          backgroundImage: `url("/images/journal.jpg")`,
          backgroundSize: "contain",
        }}
      >
        <div className="overlay absolute w-full h-full bg-orange-300/50 z-20 flex items-center justify-center">
          <h1 className="text-white text-6xl title">Journal</h1>
        </div>
      </div>

      <div className="blogs--container  bg-[#faf9f7] ">
        <div className="lg:px-32 py-16 grid grid-cols-1 md:grid-cols-2 gap-16 w-[95%] md:w-[85%] mx-auto">
          {blogs.map((blog, Index) => {
            return (
              <BlogCard
                key={Index}
                title={blog.title}
                thumbnail={blog.thumbnail}
                slug={blog.slug}
                description={blog.description}
              />
            );
          })}
        </div>
      </div>
      <WhatsappButton />
      <Footer />
    </main>
  );
}

export default Blogs;
