import React from "react";
import { RiPinterestLine } from "react-icons/ri";
import { GrInstagram } from "react-icons/gr";
import Link from "next/link";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="px-6 md:px-16 py-16 bg-[#ECE9E6] grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
      <div className="footer-links col-span-2 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="footer-copyright">
          <p>
            Copyright © 2023{" "}
            <Link href="/" className="text-[#c29538] font-semibold">
              attrattiva
            </Link>{" "}
            All rights reserved. Web Design By GrowthO.
          </p>
        </div>
        <div className="footer__address">
          <p>
            WORKS & STUDIO: C -11/1 South Of G.T. Road, Ghaziabad-201001, (U.P.)
            INDIA
          </p>
          <br />
          <p>
            B 338 New, Friends Colony East, New Friends Colony, New Delhi, Delhi
            110025
          </p>
        </div>
      </div>
      <div className="footer-newsletter col-span-1">
        {/* <div className="footer-subscribe-form w-full">
          <form action="" className="w-full">
            <div className="form-control flex flex-col md:flex-row items-start gap-4">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="py-3 px-2 w-full"
              />
              <button
                type="submit"
                className="bg-[#707070] px-3 py-3 text-white w-full"
              >
                Sign Up
              </button>
            </div>
          </form>
          <p>
            Receive exclusive access to new arrivals and updates on our
            design-driven, handcrafted collection.
          </p>
        </div> */}

        <div className="footer-social-links">
          <ul className="flex items-center gap-2">
            <li>
              <a
                href="https://www.facebook.com/AttrattivaIndia/"
                className="flex w-12 h-12 bg-black text-white text-2xl items-center justify-center"
              >
                <FaFacebookSquare />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/attrattivaindia/?hl=en"
                className="flex w-12 h-12 bg-black text-white text-2xl items-center justify-center"
              >
                <GrInstagram />
              </a>
            </li>
            {/* <li>
              <a
                href="https://www.linkedin.com/in/attrattiva-design-923056184/?originalSubdomain=in"
                className="flex w-12 h-12 bg-black text-white text-2xl items-center justify-center"
              >
                <FaLinkedin />
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
