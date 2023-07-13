import Link from "next/link";
import React from "react";

function SmallAlbumCard({ item }) {
  return (
    <div className="small-collection-card w-full group cursor-pointer">
      <Link href={`/pages/collections/${item.slug}`}>
        <div className="small-collection-card-image w-full h-[375px] overflow-hidden">
          <img
            src={item.thumbnail}
            alt="collection-card"
            className="h-full w-full object-cover group-hover:scale-110 transition-all"
            style={{
              transitionDuration: ".8s",
            }}
          />
        </div>
      </Link>
      <div className="small-collection-card mt-6">
        <h3 className="text-2xl">{item.name}</h3>
      </div>
    </div>
  );
}

export default SmallAlbumCard;
