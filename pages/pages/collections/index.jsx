import CollectionSmallCard from "@/components/CollectionCard";
import CollectionCardLarge from "@/components/ColllectionCardLarge";
import WhatsappButton from "@/components/Fab";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

function Collection() {
  return (
    <div>
      <div
        className="collection-full-screen-hero w-full h-[465px] lg:h-screen relative"
        style={{
          backgroundImage: `url("/images/collection.jpg")`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
        }}
      >
        <Header activePage={3} transparent={true} />
        <div className="collection-hero-content absolute inset-0 w-full h-full flex items-center justify-center">
          <div className="flex flex-col items-center gap-3">
            <h1 className="text-4xl  sm:text-6xl lg:text-8xl text-white">
              New Collection 2023
            </h1>
            <p className="text-white text-xl lg:text-3xl font-semibold">
              Comfort is the new luxury
            </p>
            <a
              href="#"
              className="px-2 py-3 flex items-center justify-center bg-black text-white rounded-full w-[190px]"
            >
              Take a look
            </a>
          </div>
        </div>
      </div>
      {/* <div className="collection-hero-section  flex flex-col items-center justify-center bg-[#faf9f7] py-12">
        <div className="collection-header text-center px-12">
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

        <div className="collecttions-top_list w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 py-12 md:py-32 px-6 lg:px-32">
          <CollectionSmallCard thumb={"/images/0003_2-1024x808.jpg"} />
          <CollectionSmallCard thumb={"/images/0002-1024x724.jpg"} />
          <CollectionSmallCard thumb={"/images/1-78a-1024x683.jpg"} />
        </div>
      </div> */}

      {/* <div className="colections-grid-section my-32 py-12 px-6 lg:px-32">
        <div className="collection-grid-container grid grid-cols-1  lg:grid-cols-2 gap-16">
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
      </div> */}
      <WhatsappButton />
      <Footer />
    </div>
  );
}

export default Collection;
