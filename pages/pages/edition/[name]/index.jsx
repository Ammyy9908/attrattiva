import CollectionSmallCard from "@/components/CollectionCard";
import CollectionCardLarge from "@/components/ColllectionCardLarge";
import WhatsappButton from "@/components/Fab";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SmallAlbumCard from "@/components/SmallCard";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import variants from "@/data/variants";

function Collection() {
  const router = useRouter();
  const [variant, setVariant] = useState(null);

  useEffect(() => {
    if (router.isReady) {
      const { query } = router;
      const { name } = query;
      const filteredVarient = variants.filter((v) => v.name == name);
      setVariant(filteredVarient[0]);
    }
  }, [router, router.isReady]);

  console.log("Varient", variant);
  return (
    <div>
      <div
        className="collection-full-screen-hero w-full h-[465px] lg:h-[768px] relative"
        style={{
          backgroundImage: `url("${variant && variant.thumbnail}")`,
          backgroundSize: "cover",
        }}
      >
        <div className="hero-overlay absolute w-full h-full bg-yellow-700/30"></div>
        <Header activePage={3} transparent={true} />
        <div className="collection-hero-content absolute inset-0 w-full h-full flex items-center justify-center">
          <div className="flex flex-col items-center gap-3">
            <h1 className="text-4xl  sm:text-6xl lg:text-8xl text-white">
              {variant && variant.heading}
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
      <section className="collections-section py-16 md:py-32 px-6 md:px-16">
        <div className="collection-container">
          <h1 className="text-center text-2xl md:text-3xl lg:text-5xl font-light">
            Explore the Collection
          </h1>

          {variant && (
            <div className="collections-cards-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              {variant.items.map((item, index) => {
                return (
                  <SmallAlbumCard
                    key={index}
                    item={item}
                    variant={variant.name}
                  />
                );
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
