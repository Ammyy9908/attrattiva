import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { colllections } from "@/data/collections";
import React from "react";

function CollectionBlock({ collection }) {
  return (
    <div className="collection-block w-full h-[278px] lg:h-[344px] bg-gray-100 py-12 px-12 relative group overflow-hidden cursor-pointer">
      <img
        src={collection.cover}
        alt="collection-image"
        className="w-full h-full object-cover group-hover:scale-110 absolute inset-0"
        style={{
          transitionDuration: ".5s",
        }}
      />
      <div
        className="card-overlay absolute inset-0 z-10 group-hover:bg-black/70 group-hover:scale-125"
        style={{
          transitionDuration: ".5s",
        }}
      ></div>
      <h3 className="collection-name text-2xl text-white z-20 absolute opacity-0 group-hover:opacity-100">
        {collection.title}
      </h3>
    </div>
  );
}

function Collections() {
  return (
    <main className="w-ful h-screen">
      <Header activePage={3} transparent={false} />
      {/* <div className="collection-hero-content absolute inset-0 w-full h-[478px] flex items-center justify-center bg-orange-200">
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-4xl  sm:text-6xl lg:text-8xl text-white">
            Attrattiva`s Collections
          </h1>
          <p className="text-white text-xl lg:text-3xl font-semibold">
            Explore our crafted collections
          </p>
          <a
            href="#"
            className="px-2 py-3 flex items-center justify-center bg-black text-white rounded-full w-[190px]"
          >
            Take a look
          </a>
        </div>
      </div> */}
      <div className="collections-grid grid md:grid-cols-2 lg:grid-cols-3 gap-12 w-full my-32 px-16">
        {colllections.map((collection, Index) => {
          return (
            <CollectionBlock key={collection.id} collection={collection} />
          );
        })}
      </div>
      <Footer />
    </main>
  );
}

export default Collections;
