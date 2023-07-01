import React from "react";

function BlogCard() {
  return (
    <div className="px-5 py-3 bg-white border-4 border-gray-200">
      <div className="blog-card-image">
        <img
          src="https://maidenhome.com/cdn/shop/articles/maiden-home-fall-2020-collection-behind-the-design_800x.jpg?v=1598840205"
          alt="blog-image"
          className="w-full h-[472px] object-cover"
        />
      </div>
      <div className="blog-card-body py-6">
        <h3 className="text-[#8a6b28] uppercase text-sm mb-3">
          Behind the Scene
        </h3>
        <h1>Design Your Home with our Design Team</h1>
        <p>
          Have you always dreamed of complimentary design advice, where and when
          you want it? We know how hard it is to start from scratch with an
          entirely empty space or to give your home the updated look you desire
          that still works well with your existing pieces. Oftentimes, you just
          need someone to take a look at your home with a fresh perspective and
          offer advice on everything from furniture layout to lifestyle
          practicality. We’ve all been there.
        </p>
        <a
          href="#"
          className="text-[#8a6b28]  uppercase hover:underline mt-3 block"
        >
          Read more
        </a>
      </div>
    </div>
  );
}

export default BlogCard;
