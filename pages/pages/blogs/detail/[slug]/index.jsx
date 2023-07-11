import Header from "@/components/Header";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import blogs from "@/data/blogs";
import Footer from "@/components/Footer";

function BlogDetailPage() {
  const router = useRouter();
  const { query } = router;
  const [blog, setBlog] = useState();
  const [BlogJSX, setBlogJSX] = useState(<></>);

  useEffect(() => {
    if (query) {
      console.log(query);
      const filtered = blogs.filter((b) => b.slug == query["slug"]);

      console.log(filtered);
      setBlog(filtered[0]);
    }
  }, [router.isReady, router]);
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
      <div className="blog-screen py-12 px-16 mt-32">
        {blog && (
          <div className="blog-thumbnail w-full h-[565px]">
            <img
              src={blog.thumbnail}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        )}
        {blog && (
          <div className="mt-16">
            <h1 className="text-center text-3xl font-semibold">{blog.title}</h1>
          </div>
        )}
        {blog && blog.jsx}
      </div>
      <Footer />
    </main>
  );
}

export default BlogDetailPage;
