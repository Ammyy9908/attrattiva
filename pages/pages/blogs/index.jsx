import BlogCard from "@/components/BlogCard";
import WhatsappButton from "@/components/Fab";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import blogs from "@/data/blogs";

function Blogs() {
  return (
    <div>
      <Header activePage={4} />
      <div
        className="page-hero-section h-[540px] w-full flex items-center justify-center"
        style={{
          backgroundImage: `url("//maidenhome.com/cdn/shop/files/Material_Laydown_order_portal_2000x.jpg?v=1663705398)`,
        }}
      >
        <h1 className="text-white text-6xl title">Journal</h1>
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
    </div>
  );
}

export default Blogs;
