import WhatsappButton from "@/components/Fab";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { NextSeo } from "next-seo";
import React from "react";
import { BsPinMapFill } from "react-icons/bs";
import { FaMobileAlt } from "react-icons/fa";

function FormControl({ placeholder, name, type }) {
  return (
    <div className="form-control w-full h-[48px] ">
      <input
        type="text"
        name={name}
        id={type}
        placeholder={placeholder}
        className="w-full h-full border border-gray-700 px-2"
      />
    </div>
  );
}

function contact() {
  return (
    <main>
      <NextSeo
        title="For Luxury Furniture in Delhi | Contact: +919811029255"
        description="We are the best Luxury furniture manufacturers in Delhi, Gurgaon. We also have Silver Artifacts in Delhi, Gurgaon. For more information contact us."
        openGraph={{
          type: "article",
          locale: "en_IE",
          url: "https://attrattiva.vercel.app",
          site_name: "Attrattiva - Luxury Furniture",
          title: "For Luxury Furniture in Delhi | Contact: +919811029255",
          description:
            "We are the best Luxury furniture manufacturers in Delhi, Gurgaon. We also have Silver Artifacts in Delhi, Gurgaon. For more information contact us.",
        }}
        twitter={{
          handle: "@handle",
          title: "For Luxury Furniture in Delhi | Contact: +919811029255",
          site: "@site",
          cardType: "summary",
          description:
            "We are the best Luxury furniture manufacturers in Delhi, Gurgaon. We also have Silver Artifacts in Delhi, Gurgaon. For more information contact us.",
        }}
      />
      <Header activePage={5} />
      <div className="w-full h-[385px] md:h-[578px] bg-[#7d5e20ac] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl heading font-light text-white/70">
            Let`s Chat
          </h1>
          <p className="mt-6 text-sm text-white/90 max-w-[395px] md:max-w-[565px] md:text-xl">
            Whether it’s help with an order, a question about our quality, or
            some design advice, we always love hearing from you.
          </p>
        </div>
      </div>

      <section className="py-16 px-6 md:px-16">
        <h1 className="text-center text-xl md:text-2xl lg:text-3xl title">
          WE INVITE YOU TO VISIT US AND GET A GLIMPSE INTO OUR EXQUISITE WORLD
        </h1>
        <div className="contact-bullet-points  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mt-12">
          <div className="flex flex-col items-start gap-3">
            <div className="point-icon text-4xl">
              <BsPinMapFill />
            </div>
            <div className="point-content">
              <h3 className="text-xl">WORKS & STUDIO</h3>
              <p>C -11/1 South Of G.T. Road, Ghaziabad-201001, (U.P.) INDIA</p>
            </div>
          </div>
          <div className="flex flex-col items-start gap-3">
            <div className="point-icon text-4xl">
              <BsPinMapFill />
            </div>
            <div className="point-content">
              <h3 className="text-xl">
                EXPERIENCE CENTRE (BY APPOINTMENT ONLY)
              </h3>
              <p>Pushp Villa, B-338, New Friends Colony, New Delhi-110025</p>
            </div>
          </div>
          <div className="flex flex-col items-start gap-3">
            <div className="point-icon text-4xl">
              <FaMobileAlt />
            </div>
            <div className="point-content">
              <h3 className="text-xl">+91-9811029255</h3>
            </div>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12 md:mb-0 px-6 md:px-16 py-16">
        <div className="contact__map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28032.262869985865!2d77.27422!3d28.568776!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1fc43b1b6489%3A0xe1bb2b4739de98de!2sATTRATTIVA%20(%20Interior-%20Furniture-%20Home%20D%C3%A9cor-%20Art%20%2C%20By%20Appointment%20Only%20)!5e0!3m2!1sen!2sin!4v1688291335110!5m2!1sen!2sin"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="w-full"
          ></iframe>
        </div>
        <div className="contact-info">
          <h1 className="text-2xl md:text-4xl lg:text-5xl title">
            Get In Touch With Us
          </h1>
          <form action="" className="w-full grid grid-cols-1 gap-3 mt-6">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormControl name="name" placeholder={"Name"} type={"text"} />
              <FormControl name="phone" placeholder={"Phone"} type={"text"} />
            </div>
            <FormControl
              name="email"
              placeholder={"Your Email"}
              type={"email"}
            />
            <FormControl name="message" placeholder={"Message"} type={"text"} />
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-3">
              <input
                type="submit"
                value="SEND MESSAGE"
                className="w-full h-[48px] bg-[#cf9e3bd5] text-white"
              />
              <div className="flex lg:flex-row flex-col items-center gap-6">
                <a href="https://wa.me/919811029255">+919811029255</a>
                <a
                  href="https://youtube.com/@kashishaggarwal2532"
                  className="font-bold"
                >
                  Visit Our Studio
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
      <WhatsappButton />
      <Footer />
    </main>
  );
}

export default contact;
