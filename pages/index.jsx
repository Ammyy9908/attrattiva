import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StoryCard from "@/components/StoryCard";
import { Inter } from "next/font/google";
import colllections from "@/data/collections";
import { AiOutlineUserAdd } from "react-icons/ai";
import { BsClock, BsFillBoxFill } from "react-icons/bs";
import { IoDiamond } from "react-icons/io";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination, Navigation } from "swiper";
import WhatsappButton from "@/components/Fab";
import Sidebar from "@/components/Sidebar";

function FactItem({ Icon, title, description }) {
  return (
    <div className="fact-item flex flex-col items-center">
      <div className="fact-body">
        <h1 className="text-2xl font-bold text-center">{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
}
export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header activePage={0} />

      <div className="w-full">
        <div className="home_hero_section  xl:h-[768px] mt-32">
          <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-16 py-32">
            <div className="hero-component-b group relative cursor-pointer">
              <div
                className="hero-b-component-bakcground  h-[465px] xl:h-[475px] -left-[800px] group-hover:left-0 xl:absolute bg-yellow-200/50 w-full transition-all rounded-md"
                style={{ transitionDuration: "2s" }}
              ></div>
              <div className="hero-component-content absolute -top-10 right-10">
                <div
                  className="absolute -left-[160px] bottom-10 z-20 max-w-[200px] group-hover:-left-[210px] transition-all"
                  style={{ transitionDuration: "2s" }}
                >
                  <h3 className="edition-name text-xl w-full font-semibold z-20">
                    Attrattiva
                  </h3>
                  <p className="text-4xl font-semibold">
                    Made in India Luxury Design.
                  </p>
                </div>
                <Link href={"/pages/edition/attrattiva"}>
                  <div
                    className="hero-component-image w-[350px] h-[465px] group-hover:scale-110 overflow-hidden transition-all"
                    style={{ transitionDuration: "2s" }}
                  >
                    <img
                      src="/images/attrattiva.jpg"
                      alt=""
                      className="w-full group-hover:scale-125 h-full object-cover transition-all"
                      style={{ transitionDuration: "2s" }}
                    />
                  </div>
                </Link>
              </div>
            </div>
            <div
              className="hero-component-b group relative cursor-pointer
          "
            >
              <div
                className=" hero-b-component-bakcground  h-[475px] -right-[800px] group-hover:right-0 xl:absolute bg-red-200/50 w-full transition-all rounded-md"
                style={{ transitionDuration: "2s" }}
              ></div>
              <div className="hero-component-content absolute -top-10 left-10 h-[475px]">
                <div
                  className="absolute -right-[215px] bottom-10 z-20 max-w-[210px] group-hover:-right-[230px] transition-all"
                  style={{ transitionDuration: "2s" }}
                >
                  <h3 className="edition-name text-xl w-full font-semibold ">
                    Eleganza
                  </h3>
                  <p className="text-4xl font-semibold">
                    Made in India Luxury Design.
                  </p>
                </div>
                <Link href={"/pages/edition/eleganza"}>
                  <div
                    className="hero-component-image w-[350px] h-[465px] group-hover:scale-110 overflow-hidden transition-all"
                    style={{ transitionDuration: "2s" }}
                  >
                    <img
                      src="/images/elegance.jpg"
                      alt=""
                      className="w-full group-hover:scale-125 h-full object-cover transition-all"
                      style={{ transitionDuration: "2s" }}
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="home-hero-section w-full relative h-[475px] mt-16 lg:mt-32">
          <Swiper
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            className="w-full h-full"
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
          >
            <SwiperSlide className="h-full w-full">
              <img
                src="/images/attrattiva_banner_1.jpeg"
                alt="hero-section-image"
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
            <SwiperSlide className="h-full">
              <img
                src="/images/attrative_banner_2.jpeg"
                alt="hero-section-image"
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
            <SwiperSlide className="h-full">
              <img
                src="/images/attrattive_banner_3.jpeg"
                alt="hero-section-image"
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
            <SwiperSlide className="h-full">
              <img
                src="/images/attrattive_banner_4.jpeg"
                alt=""
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          </Swiper>
        </div> */}

        <div className="home-about-section px-6 sm:px-16 md:px-32 mt-12">
          <div className="about-header md:col-span-1 flex flex-col items-center">
            <h1 className="text-xl md:text-3xl title uppercase text-center">
              About ATTRATTIVA
            </h1>
            <img src="/images/border.png" alt="gold-border-icon" />
          </div>
          <div className="about-section-content md:col-span-2 mt-12 text-center">
            <p className="text-black/50">
              <Link href={"/"} className="text-[#c29538]">
                Attrattiva
              </Link>{" "}
              is a well-known brand engaged in manufacturing, Supplying,
              Importing & Exporting Luxury Products of Interior & Exterior
              Designing to make your space look exquisite. We have experience of
              over 15+ years in this Industry. Our range of products includes{" "}
              <Link href={"/"} className="text-[#c29538]">
                Bespoke Furniture
              </Link>
            </p>
            <p className="text-black/50">
              {" "}
              (wood & metal), Home décor and Art, Tanjore paintings, Modern art
              and paintings, Semi-Precious inlay work, God figures, Silver
              artefacts and furniture, Pichwai art and painting. We are also
              engaged in providing{" "}
              <Link href={"/"} className="text-[#c29538]">
                Interior solutions
              </Link>{" "}
              such as space planning. We have a well functional & spacious
              infrastructural unit where we manufacture our products in an
              efficient manner. We have a team of creative, skilled, and
              innovative artisans who make sure to offer splendid designs in our
              products. At Attrattiva, We believe in designing iconic pieces
              that set you apart from the crowd. It isn’t just about uplifting
              the aesthetics of your space but crafting furniture that reflects
              your persona.
            </p>{" "}
            {/* <p className="text-black/50">
           
          </p> */}
          </div>
        </div>

        <section
          className="fact_and_figure_section py-16 px-6 sm:px-16 blg:px-32 w-full"
          style={{
            backgroundImage: `url("/images/BG-GREY.jpg")`,
            backgroundSize: "cover",
          }}
        >
          <h1 className="text-center title text-xl md:text-3xl">
            FACTS & FIGURES
          </h1>
          <div className="facts_group grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mt-12">
            <FactItem
              Icon={<AiOutlineUserAdd />}
              title="50+"
              description={"CRAFTSMEN"}
            />
            <FactItem
              Icon={<BsClock />}
              title={"40+"}
              description={"YEARS OF EXPERIENCE"}
            />
            <FactItem
              Icon={<BsFillBoxFill />}
              title={"200+"}
              description={"Products"}
            />

            <FactItem
              Icon={<IoDiamond />}
              title={"100%"}
              description={"Quality"}
            />
          </div>
        </section>

        <section className="story-section py-12 md:py-32 px-6 lg:px-32">
          <div className="story-section-container">
            <div className="md:col-span-1 flex flex-col items-center">
              <h2 className="text-2xl text-center title">
                EXPERIENCE OUR STORES
              </h2>
              <img src="/images/border.png" alt="gold-border-icon" />
            </div>
            <div className="story-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 my-12">
              {colllections.map((collection, index) => {
                return (
                  <StoryCard
                    key={index}
                    image={collection.images[0]}
                    title={collection.title}
                    description={collection.description}
                  />
                );
              })}
            </div>
            <a
              href="#"
              className="w-[170px] mx-auto h-[48px] flex items-center justify-center  border-2 border-black"
            >
              Explore
            </a>
          </div>
        </section>

        <section className="inspiration-section px-6 lg:px-32 py-12 md:py-32 bg-[#FAF9F7]">
          <div className="inspiration-container flex flex-col md:grid grid-cols-1 lg:grid-cols-2 gap-32">
            <div className="section--image w-full flex items-center justify-center">
              <img src="/images/attrattive_story.png" alt="inspiration-thumb" />
            </div>
            <div className="inspiration-content text-center flex flex-col items-center gap-3 h-full  justify-center">
              <div className="flex flex-col items-center gap-5">
                <h1 className="text-5xl title">Our Story</h1>
                <p className="text-black/40">
                  Your home should tell the story of who you are, and be a
                  collection of what you love. An intuitive eye for quality,
                  detail, and presentation, has always believed in pushing the
                  boundaries especially when it comes to redefining affordable
                  luxury interiors....
                </p>

                <Link
                  href="/story"
                  className="w-[190px] h-[48px] bg-[#ECE9E5] flex mx-auto items-center justify-center"
                >
                  Read more
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="gallery-section px-2 py-6 lg:px-32 lg:py-16 block sm:grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-32 md:gap-y-64 mb-34 lg:mb-0">
          <div className="gallery-small my-16">
            <div className="gallery-card w-full h-full">
              <img
                src="/images/artifacr100-985x1024.jpg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="gallery-card-footer text-center py-3">
              <h1 className="uppercase text-sm md:text-2xl">
                Home Decor & Arts
              </h1>
              <p className="text-black/50">
                It has been said that Art has the ability to transform a space
                and define its character. Attrattiva curates the most exquisite
                and beautiful pieces of artistic luxury for those who appreciate
                design, quality and craftsmanship.
              </p>
            </div>
          </div>
          <div className="gallery-large my-16">
            <div className="gallery-card w-full h-full">
              <img
                src="/images/1-78a-1024x683.jpg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="gallery-card-footer text-center py-3">
              <h1 className="uppercase text-sm md:text-2xl">
                BESPOKE FURNITURE
              </h1>
              <p className="text-black/50">
                If you are looking for suitable furniture for your own home, you
                usually do not want to be satisfied with average goods from the
                local dealer. They are not made perfectly according to your
                space situation and therefore you have to always a compromise.
                However, there is now a better alternative: the bespoke
                furniture from Attrattiva.
              </p>
            </div>
          </div>

          <div className="gallery-large my-16">
            <div className="gallery-card w-full h-full">
              <img
                src="/images/IMG-20200318-WA0011.jpg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="gallery-card-footer text-center py-3">
              <h1 className="uppercase text-sm md:text-2xl">
                TANJORE PAINTINGS
              </h1>
              <p className="text-black/50">
                Tanjore Paintings are the classical south Indian art that was
                developed in the late 16th century in Thanjavur also known as
                Tanjore in Tamil Nadu state.
              </p>
            </div>
          </div>
          <div className="gallery-small my-16">
            <div className="gallery-card w-full h-full">
              <img
                src="/images/bdcd188c-bfcd-4b66-9b87-978064a0c149-1024x768.jpg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="gallery-card-footer text-center py-3">
              <h1 className="uppercase text-sm md:text-2xl">
                Interior Solutions
              </h1>
              <p className="text-black/50">
                {" "}
                Attrattiva is a leading brand providing all its clients with the
                best interior fittings and solutions including space planning.
                Our aim is to provide the most exotic luxury interior solutions
                according to our client’s expectations and design
              </p>
            </div>
          </div>
        </section>

        <section className="contact-banner-home w-full mt-32">
          <Link href={"/pages/contact"}>
            <img
              src="/images/BAnner1.jpg"
              alt="contact-banner"
              className="w-full"
            />
          </Link>
        </section>
      </div>
      <WhatsappButton />
      <Footer />
    </main>
  );
}
