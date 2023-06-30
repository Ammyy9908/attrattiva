import Link from "next/link";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
function Header() {
  const [nav, setNav] = useState(false);
  return (
    <div className="fixed top-0 w-full z-50 bg-white  py-6 px-6 flex flex-col items-start shadow-xl">
      <div className="header__top w-full text-center flex items-center justify-between md:block">
        <button
          className="w-8 h-8 hover:bg-black/10 md:hidden flex items-center justify-center rounded-full"
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
      <div className="header__nav px-64 w-full mt-3 hidden md:block">
        <ul className="flex  w-full items-center justify-center gap-12">
          <li>
            <Link href="/" className="uppercase text-xs">
              Home
            </Link>
          </li>
          <li>
            <Link href="/pages/about" className="uppercase text-xs">
              About
            </Link>
          </li>
          <li>
            <Link href="/story" className="uppercase text-xs">
              Story
            </Link>
          </li>
          <li>
            <Link href="/pages/collections" className="uppercase text-xs">
              Collections
            </Link>
          </li>
          <li>
            <Link href="/blogs" className="uppercase text-xs">
              Blogs
            </Link>
          </li>
          <li>
            <Link href="/pages/contact" className="uppercase text-xs">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {nav && (
        <div className="mobile__nav w-full md:hidden">
          <ul className="w-full flex flex-col items-start">
            <li className="w-full py-3  border-b">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="w-full py-3 border-b">
              <Link href={"/about"}>About</Link>
            </li>
            <li className="w-full py-3 border-b">
              <Link href={"/story"}>Story</Link>
            </li>
            <li className="w-full py-3 border-b">
              <Link href={"/pages/collections"}>Collections</Link>
            </li>
            <li className="w-full py-3 border-b">
              <Link href={"/blogs"}>Blogs</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Header;
