import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { colllections } from "@/data/collections";
import Link from "next/link";
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
      <div className="z-20 absolute  text-white w-full h-full inset-0 py-6 px-5 opacity-0 group-hover:opacity-100">
        <h3 className="collection-name text-2xl   ">{collection.title}</h3>
        <p>
          {collection.description.length > 225
            ? collection.description.slice(0, 225) + "..."
            : collection.description}
        </p>
        <Link
          href={`/pages/collections/${collection.slug}`}
          className="flex w-[170px] h-[42px] bg-white items-center justify-center rounded-md mt-2 text-black font-bold"
        >
          <span>View</span>
        </Link>
      </div>
    </div>
  );
}

function Collections() {
  return (
    <main className="w-ful h-screen">
      <Header activePage={3} transparent={false} />
      <div className="header mt-64 px-6 md:px-16">
        <h1 className="text-3xl md:text-4xl lg:text-6xl">
          Explore our Collections
        </h1>
        <p className="my-6 text-xl md:text-2xl w-full sm:w-[675px] lg:w-[968px] text-black/60 leading-10">
          Welcome to a World of Crafting Comfort and Style: Explore Our
          Signature Furniture Pieces which are hand-carved and done with fine
          craftsmanship.
        </p>
      </div>
      <div className="collections-grid grid md:grid-cols-2 lg:grid-cols-3 gap-12 w-full my-16 px-6 md:px-16">
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
