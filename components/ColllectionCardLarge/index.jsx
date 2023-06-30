import React from "react";

function CollectionCardLarge() {
  return (
    <div className="colection-card-big">
      <div className="collection-card-large-thumb w-full h-[375px]">
        <img
          src="https://i.shgcdn.com/82fdbb53-7a9b-42b3-bead-48aa13602050/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
          alt=""
          className="w-full h-full"
        />
      </div>
      <div className="collection-card-large-footer py-6">
        <h3 className="title text-2xl text-black/70">The Chelsea Sofa</h3>
      </div>
    </div>
  );
}

export default CollectionCardLarge;
