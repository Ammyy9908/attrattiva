import React from "react";

function BlogCard({ title, thumbnail, description, slug }) {
  return (
    <div className="px-5 py-3 bg-white border-4 border-gray-200 hover:scale-110 cursor-pointer transition-all">
      <div className="blog-card-image w-full h-[470px]">
        <img
          src={thumbnail}
          alt="blog-image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="blog-card-body py-6">
        {/* <h3 className="text-[#8a6b28] uppercase text-sm mb-3">{title}</h3> */}
        <h1 className="text-xl font-semibold">{title}</h1>
        <p>
          {description.length > 30
            ? description.slice(0, 30) + "..."
            : description}
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
