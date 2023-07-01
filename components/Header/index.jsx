import Link from "next/link";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
function Header() {
  const [nav, setNav] = useState(false);
  return (
    <div className="fixed top-0 w-full z-50 bg-white  py-6 px-6 flex flex-col items-start shadow-xl">
      <div className="header__top w-full text-center flex items-center justify-between lg:block">
        <button
          className="w-8 h-8 hover:bg-black/10 lg:hidden flex items-center justify-center rounded-full"
          onClick={() => {
            setNav(!nav);
          }}
        >
          <RxHamburgerMenu />
        </button>
        <a
          href="#"
          className="text-xl font-semibold md:text-3xl logo uppercase"
        >
          Attrattiva
        </a>
        <div></div>
      </div>
      <div className="header__nav px-64 w-full mt-3 hidden lg:block">
        <ul className="flex  w-full items-center justify-center gap-12">
          <li>
            <Link
              href="/"
              className="uppercase text-xs text-black/50 hover:text-black"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/why-us"
              className="uppercase text-xs text-black/50 hover:text-black"
            >
              Why Us?
            </Link>
          </li>
          <li>
            <Link
              href="/story"
              className="uppercase text-xs text-black/50 hover:text-black"
            >
              Story
            </Link>
          </li>
          <li className="relative group">
            <Link
              href="/pages/collections"
              className="uppercase text-xs text-black/50 hover:text-black"
            >
              Collections
            </Link>
            <ul className="group-hover:block hidden absolute px-2 py-2 bg-white uppercase w-[230px]">
              <li>
                <Link
                  href="/"
                  className="text-xs text-black/50 hover:text-black"
                >
                  Luxury Furniture
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-xs text-black/50 hover:text-black"
                >
                  Home Decor & Art
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-xs text-black/50 hover:text-black"
                >
                  Tanjore Paintings
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-xs text-black/50 hover:text-black"
                >
                  Modern Art & Pantings
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-xs text-black/50 hover:text-black"
                >
                  God Statues
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-xs text-black/50 hover:text-black"
                >
                  Silver Artifacts & Furniture
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-xs text-black/50 hover:text-black"
                >
                  Pichwai Art & Paintings
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-xs text-black/50 hover:text-black"
                >
                  Interior Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-xs text-black/50 hover:text-black"
                >
                  Gold Furniiture
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-xs text-black/50 hover:text-black"
                >
                  Bone Inlay Furniture
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-xs text-black/50 hover:text-black"
                >
                  Murano Art
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-xs text-black/50 hover:text-black"
                >
                  Semiprecious Inlay Work
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link
              href="/pages/blogs"
              className="uppercase text-xs text-black/50 hover:text-black"
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link
              href="/pages/contact"
              className="uppercase text-xs text-black/50 hover:text-black"
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
              <Link href={"/"} className="text-black/50 hover:text-black">
                Home
              </Link>
            </li>
            <li className="w-full py-3 border-b">
              <Link href={"/why-us"} className="text-black/50 hover:text-black">
                Why Us?
              </Link>
            </li>
            <li className="w-full py-3 border-b">
              <Link href={"/story"} className="text-black/50 hover:text-black">
                Story
              </Link>
            </li>
            <li className="w-full py-3 border-b">
              <Link
                href={"/pages/collections"}
                className="text-black/50 hover:text-black"
              >
                Collections
              </Link>
            </li>
            <li className="w-full py-3 border-b">
              <Link
                href={"/pages/blogs"}
                className="text-black/50 hover:text-black"
              >
                Blogs
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Header;
