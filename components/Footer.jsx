import React from "react";
import { RiPinterestLine } from "react-icons/ri";
import { GrInstagram } from "react-icons/gr";

function Footer() {
  return (
    <div className="px-6 md:px-16 py-16 bg-[#ECE9E6] grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
      <div className="footer-links col-span-2 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <ul className="text-sm text-black/50">
          <li>
            <a href="#">Our Story</a>
          </li>
          <li>
            <a href="#">Order Swatches</a>
          </li>
          <li>
            <a href="#">Ready to ship</a>
          </li>
          <li>
            <a href="#">Gift Cards</a>
          </li>
        </ul>
        {/* <ul className="text-sm text-black/50">
          <li>
            <a href="#">Our Story</a>
          </li>
          <li>
            <a href="#">Order Swatches</a>
          </li>
          <li>
            <a href="#">Ready to ship</a>
          </li>
          <li>
            <a href="#">Gift Cards</a>
          </li>
        </ul>
        <ul className="text-sm text-black/50">
          <li>
            <a href="#">Our Story</a>
          </li>
          <li>
            <a href="#">Order Swatches</a>
          </li>
          <li>
            <a href="#">Ready to ship</a>
          </li>
          <li>
            <a href="#">Gift Cards</a>
          </li>
        </ul> */}
      </div>
      <div className="footer-newsletter col-span-1">
        <div className="footer-subscribe-form w-full">
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
        </div>

        <div className="footer-social-links mt-6">
          <ul className="flex items-center gap-2">
            <li>
              <a href="#">
                <RiPinterestLine />
              </a>
            </li>
            <li>
              <a href="#">
                <GrInstagram />
              </a>
            </li>
            <li>
              <a href=""></a>
            </li>
            <li>
              <a href=""></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
