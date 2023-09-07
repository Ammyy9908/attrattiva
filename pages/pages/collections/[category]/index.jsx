import Header from "@/components/Header";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { colllections } from "@/data/collections";
import Footer from "@/components/Footer";

function CollectionGalleryBlock({ file_path, alt }) {
  return (
    <div className="collection-block-gallery">
      <img src={file_path} alt={alt} />
    </div>
  );
}

function CategoryPage() {
  const [cat, setCategory] = React.useState(null);
  const router = useRouter();

  useEffect(() => {
    //i need to get category from the router using useRouter
    //then i need to set the category state
    //then i need to fetch the data from the api
    //then i need to render the data

    //get category from the router
    const { category } = router.query;

    //set the category state
    if (category) {
      const filteredCollection = colllections.filter((c) => c.slug == category);
      console.log(filteredCollection);
      setCategory(filteredCollection[0]);
    }
  }, [router.query]);
  return (
    <main>
      <Header transparent={false} />
      <div className="category-details my-32 px-6 md:px-16">
        <h3 className="text-5xl">{cat && cat["title"]}</h3>
        <p className="w-[375px] md:w-[75%] mt-3 text-xl text-black/70">
          {cat && cat["description"]}
        </p>

        <div className="collections gallery grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mt-12">
          {cat &&
            cat.images.map((image, imageIndex) => {
              return (
                <CollectionGalleryBlock
                  file_path={image}
                  alt={"Collection Image " + (imageIndex + 1)}
                  key={imageIndex}
                />
              );
            })}
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default CategoryPage;
