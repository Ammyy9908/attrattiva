import WhatsappButton from "@/components/Fab";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

function contact() {
  return (
    <div>
      <Header />
      <div className="w-full h-[385px] md:h-[578px] bg-[#ece9e6]/50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl heading font-light text-black/70">
            Let`s Chat
          </h1>
          <p className="mt-6 text-sm text-black/50 max-w-[395px]">
            Whether it’s help with an order, a question about our quality, or
            some design advice, we always love hearing from you.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12 md:mb-0">
        <img
          src="https://images.unsplash.com/photo-1633114594701-52002208270f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1010&q=80"
          alt="red-sofa"
          className="h-full object-cover hidden lg:block"
        />
        <div className="contact-info flex fex-col justify-center items-center py-16 px-16 md:py-32 md:px-32 lg:px-12 md:py-12">
          <div className="flex flex-col items-center gap-12">
            <div className="text-center">
              <h1 className="uppercase text-sm leading-4 text-black/50">
                EMAIL
              </h1>
              <a
                href="mailto:Designs@attrattiva.in"
                className="text-[#a5710080] text-xl heading font-light block mt-3"
              >
                Designs@attrattiva.in
              </a>
            </div>
            <div className="text-center">
              <h1 className="uppercase text-sm leading-4 text-black/50">
                PHONE
              </h1>
              <a
                href="mailto:Designs@attrattiva.in"
                className="text-[#a5710080] text-xl heading font-light mt-3 block"
              >
                9811029255
              </a>
            </div>
            <div className="text-center">
              <h1 className="uppercase text-sm leading-4 text-black/50">
                ADDRESS
              </h1>
              <p
                href="mailto:Designs@attrattiva.in"
                className="text-[#a5710080] text-xl heading font-light mt-3"
              >
                9Interiors, Home Decor, Art & Bespoke FurnitureFactory Outlet &
                Works:  Block I, C11, National Highway 24, South Side G.T Rd,
                Ghaziabad, Uttar Pradesh 201009
              </p>
            </div>
          </div>
        </div>
      </div>
      <WhatsappButton />
      <Footer />
    </div>
  );
}

export default contact;
