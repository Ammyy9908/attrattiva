import Link from "next/link";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Sidebar from "../Sidebar";
function Header({ activePage, transparent }) {
  const [nav, setNav] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  return (
    <div className="w-full relative">
      <div
        className={`rounded-full fixed left-[50%] translate-x-[-50%] top-5 w-[90%] mx-auto z-50 bg-white/70 backdrop-blur-lg  py-3 px-2 md:px-3 flex flex-col items-start shadow-lg`}
      >
        <div className="header__top w-full text-center grid grid-cols-3 gap-1 md:gap-16">
          <div className="flex items-center gap-6">
            <button
              className="w-8 h-8 md:w-12 md:h-12 bg-black  rounded-full flex items-center justify-center shadow-2x"
              onClick={() => {
                setNav(!nav);
                setSidebar(true);
              }}
            >
              <RxHamburgerMenu className="text-white font-bold" />
            </button>
          </div>
          <Link
            href="/"
            className="text-xl font-semibold md:text-3xl logo uppercase"
          >
            Attrattiva
          </Link>
        </div>
      </div>

      <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
    </div>
  );
}

export default Header;
