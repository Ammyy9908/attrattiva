import CollectionSmallCard from "@/components/CollectionCard";
import CollectionCardLarge from "@/components/ColllectionCardLarge";
import WhatsappButton from "@/components/Fab";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SmallAlbumCard from "@/components/SmallCard";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import collections from "@/data/collections";

function ImageCard({ image }) {
  return (
    <div className="small-collection-card w-full group cursor-pointer">
      <div className="small-collection-card-image w-full h-[375px] overflow-hidden">
        <img
          src={image}
          alt="collection-card"
          className="h-full w-full object-cover group-hover:scale-110 transition-all"
          style={{
            transitionDuration: ".8s",
          }}
        />
      </div>
    </div>
  );
}

function Collection() {
  const router = useRouter();
  const [collection, setCollection] = useState(null);

  useEffect(() => {
    if (router.isReady) {
      const { query } = router;
      const { category } = query;

      console.log("Category Id is", category);

      const filteredVarient = collections.filter((c) => c.slug == category);

      console.log("Filtered Varient is", filteredVarient);
      setCollection(filteredVarient[0]);
    }
  }, [router, router.isReady]);
  return (
    <div>
      <div
        className="collection-full-screen-hero w-full h-[465px] lg:h-[798px] relative"
        style={{
          backgroundImage: `url("${collection && collection.cover}")`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="hero-overlay absolute w-full h-full bg-yellow-700/30"></div>
        <Header activePage={3} transparent={true} />
        <div className="collection-hero-content absolute inset-0 w-full h-full flex items-center justify-center">
          <div className="flex flex-col items-center gap-8">
            <h1 className="text-4xl  sm:text-6xl lg:text-8xl text-white">
              {collection && collection.title}
            </h1>
            <a
              href="#gallery"
              className="px-2 py-3 flex items-center justify-center bg-black text-white rounded-full w-[190px]"
            >
              Explore
            </a>
          </div>
        </div>
      </div>
      <section
        className="collections-section py-16 md:py-32 px-6 md:px-16"
        id="gallery"
      >
        <div className="collection-container">
          <h1 className="text-center text-2xl md:text-3xl lg:text-5xl font-light">
            Explore the Gallery
          </h1>

          {collection && (
            <div className="collections-cards-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              {collection.images.map((item, index) => {
                return <ImageCard key={index} image={item} />;
              })}
            </div>
          )}
        </div>
      </section>

      <WhatsappButton />
      <Footer />
    </div>
  );
}

export default Collection;
