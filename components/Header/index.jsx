import Link from "next/link";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
function Header({ activePage }) {
  const [nav, setNav] = useState(false);
  return (
    <div className="fixed top-0 w-full z-50 bg-white  py-6 px-6 flex flex-col items-start">
      <div className="header__top w-full text-center flex items-center justify-between lg:block">
        <button
          className="w-8 h-8 hover:bg-black/10 lg:hidden flex items-center justify-center rounded-full"
          onClick={() => {
            setNav(!nav);
          }}
        >
          <RxHamburgerMenu />
        </button>
        <Link
          href="/"
          className="text-xl font-semibold md:text-3xl logo uppercase"
        >
          Attrattiva
        </Link>
        <div></div>
      </div>
      <div className="header__nav px-64 w-full mt-3 hidden lg:block">
        <ul className="flex  w-full items-center justify-center gap-12">
          <li>
            <Link
              href="/"
              className={`uppercase text-xs ${
                activePage == 0 ? "text-[#c29538] font-bold" : "text-black/50"
              } hover:text-[#c29538]`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/why-us"
              className={`uppercase text-xs ${
                activePage == 1 ? "text-[#c29538] font-bold" : "text-black/50"
              } hover:text-[#c29538]`}
            >
              Why Us?
            </Link>
          </li>
          <li>
            <Link
              href="/story"
              className={`uppercase text-xs ${
                activePage == 2 ? "text-[#c29538] font-bold" : "text-black/50"
              } hover:text-[#c29538]`}
            >
              Story
            </Link>
          </li>
          <li className="relative group">
            <Link
              href="/pages/collections"
              className={`uppercase text-xs ${
                activePage == 3 ? "text-[#c29538] font-bold" : "text-black/50"
              } hover:text-[#c29538]`}
            >
              Collections
            </Link>
            <ul className="group-hover:block hidden absolute px-2 py-2 bg-white/90 uppercase w-[230px] shadow-xl rounded-md backdrop-blur-md">
              <li>
                <Link
                  href="/"
                  className="text-xs text-black/50 hover:text-[#c29538]"
                >
                  Luxury Furniture
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-xs text-black/50 hover:text-[#c29538]"
                >
                  Home Decor & Art
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-xs text-black/50 hover:text-[#c29538]"
                >
                  Tanjore Paintings
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-xs text-black/50 hover:text-[#c29538]"
                >
                  Modern Art & Pantings
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-xs text-black/50 hover:text-[#c29538]"
                >
                  God Statues
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-xs text-black/50 hover:text-[#c29538]"
                >
                  Silver Artifacts & Furniture
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-xs text-black/50 hover:text-[#c29538]"
                >
                  Pichwai Art & Paintings
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-xs text-black/50 hover:text-[#c29538]"
                >
                  Interior Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-xs text-black/50 hover:text-[#c29538]"
                >
                  Gold Furniiture
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-xs text-black/50 hover:text-[#c29538]"
                >
                  Bone Inlay Furniture
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-xs text-black/50 hover:text-[#c29538]"
                >
                  Murano Art
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-xs text-black/50 hover:text-[#c29538]"
                >
                  Semiprecious Inlay Work
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link
              href="/pages/blogs"
              className={`uppercase text-xs ${
                activePage == 4 ? "text-[#c29538] font-bold" : "text-black/50"
              } hover:text-[#c29538]`}
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link
              href="/pages/contact"
              className={`uppercase text-xs ${
                activePage == 5 ? "text-[#c29538] font-bold" : "text-black/50"
              } hover:text-[#c29538]`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {nav && (
        <div className="mobile__nav w-full lg:hidden">
          <ul className="w-full flex flex-col items-start">
            <li className="w-full py-3  border-b">
              <Link
                href={"/"}
                className={`uppercase text-xs ${
                  activePage == 0 ? "text-[#c29538] font-bold" : "text-black/50"
                } hover:text-[#c29538]`}
              >
                Home
              </Link>
            </li>
            <li className="w-full py-3 border-b">
              <Link
                href={"/why-us"}
                className={`uppercase text-xs ${
                  activePage == 1 ? "text-[#c29538] font-bold" : "text-black/50"
                } hover:text-[#c29538]`}
              >
                Why Us?
              </Link>
            </li>
            <li className="w-full py-3 border-b">
              <Link
                href={"/story"}
                className={`uppercase text-xs ${
                  activePage == 2 ? "text-[#c29538] font-bold" : "text-black/50"
                } hover:text-[#c29538]`}
              >
                Story
              </Link>
            </li>
            <li className="w-full py-3 border-b">
              <Link
                href={"/pages/collections"}
                className={`uppercase text-xs ${
                  activePage == 3 ? "text-[#c29538] font-bold" : "text-black/50"
                } hover:text-[#c29538]`}
              >
                Collections
              </Link>
            </li>
            <li className="w-full py-3 border-b">
              <Link
                href={"/pages/blogs"}
                className={`uppercase text-xs ${
                  activePage == 4 ? "text-[#c29538] font-bold" : "text-black/50"
                } hover:text-[#c29538]`}
              >
                Blogs
              </Link>
            </li>

            <li className="w-full py-3 border-b">
              <Link
                href="/pages/contact"
                className={`uppercase text-xs ${
                  activePage == 5 ? "text-[#c29538] font-bold" : "text-black/50"
                } hover:text-[#c29538]`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Header;
