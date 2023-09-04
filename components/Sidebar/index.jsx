import Link from "next/link";
import React from "react";
import { IoMdClose } from "react-icons/io";
import { BiHomeCircle } from "react-icons/bi";
function Sidebar({ sidebar, setSidebar }) {
  return (
    <div
      className={`${
        sidebar ? "sidebar-enable" : "sidebar-disable"
      } fixed  z-50 grid md:grid-cols-2 h-full top-0 w-full`}
      style={{ transitionDuration: "1.5s" }}
    >
      <div className="sidebar-main col-span-1 bg-[#faf4e4]/50 py-16 px-16 backdrop-blur-md">
        <div className="sidebar-header ">
          <div className="flex items-center gap-12">
            <button
              className="nav-close-btn w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold"
              onClick={() => {
                setSidebar(false);
              }}
            >
              <IoMdClose />
            </button>
          </div>
        </div>
        <ul className="sidebar-nav mt-16 flex flex-col items-start gap-8 font-bold text-3xl">
          <li>
            <Link href={"/story"}>Story</Link>
          </li>
          <li>
            <Link href={"/pages/collections"}>Collections</Link>
          </li>
          <li>
            <Link href={"/why-us"}>Why Us?</Link>
          </li>
          <li>
            <Link href={"/pages/blogs"}>Blogs</Link>
          </li>
          <li>
            <Link href={"/pages/contact"}>Contact</Link>
          </li>
        </ul>
        <div className="sidebar-footer"></div>
      </div>
      {/* <div className="sidebar-overlay bg-black/50 backdrop-blur-md col-span-1 hidden md:block"></div> */}
    </div>
  );
}

export default Sidebar;
