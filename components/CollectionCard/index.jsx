import React from "react";

function CollectionSmallCard({ thumb }) {
  return (
    <div className="colection-card-small group cursor-pointer">
      <div className="collection-card-thumb w-full h-[375px] relative">
        <img
          src={thumb}
          alt="collection-card"
          className="w-full h-full object-cover"
        />
        <div className="collection-card-overlay absolute inset-0 w-ful h-full group-hover:bg-black/20 transition-all"></div>
      </div>
      <div className="collection-card-footer  my-3  text-center">
        <h3 className="text-2xl title text-black/70">Shop Sofas</h3>
      </div>
    </div>
  );
}

export default CollectionSmallCard;
