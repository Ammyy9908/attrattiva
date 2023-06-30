import CollectionSmallCard from "@/components/CollectionCard";
import CollectionCardLarge from "@/components/ColllectionCardLarge";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

function Collection() {
  return (
    <div>
      <Header />
      <div
        className="collection--banner w-full h-[375px] md:h-[575px]"
        style={{
          backgroundImage: `url("http://attrattiva.in/wp-content/uploads/2021/07/0004_1-1024x514.jpg")`,
          backgroundSize: `cover`,
        }}
      ></div>
      <div className="collection-hero-section  flex flex-col items-center justify-center bg-[#faf9f7] py-12">
        <div className="collection-header text-center">
          <h1 className="text-2xl md:text-6xl title">Bespoke Furniture</h1>
          <p className="text-sm text-black/50 mt-6 max-w-[775px]">
            If you are looking for suitable furniture for your own home, you
            usually do not want to be satisfied with average goods from the
            local dealer. They are not made perfectly according to your space
            situation and therefore you have to always a compromise. However,
            there is now a better alternative: the bespoke furniture from
            Attrattiva.
          </p>
        </div>

        <div className="collecttions-top_list w-full grid grid-cols-1 md:grid-cols-3 gap-16 py-32 px-12 md:px-32">
          <CollectionSmallCard
            thumb={
              "http://attrattiva.in/wp-content/uploads/2021/07/0003_2-1024x808.jpg"
            }
          />
          <CollectionSmallCard
            thumb={
              "http://attrattiva.in/wp-content/uploads/2021/07/0002-1024x724.jpg"
            }
          />
          <CollectionSmallCard
            thumb={
              "http://attrattiva.in/wp-content/uploads/2021/07/1-78a-1024x683.jpg"
            }
          />
        </div>
      </div>

      <div className="colections-grid-section my-32 py-12 px-12 md:px-32">
        <div className="collection-grid-container grid grid-cols-1  md:grid-cols-2 gap-16">
          <CollectionCardLarge />
          <CollectionCardLarge />
          <CollectionCardLarge />
          <CollectionCardLarge />
          <CollectionCardLarge />
          <CollectionCardLarge />
          <CollectionCardLarge />
          <CollectionCardLarge />
          <CollectionCardLarge />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Collection;
