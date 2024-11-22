import Link from "next/link";
import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Image from "next/image";
import Logo from "../assets/VYB_Logo.png";
import User from "../assets/Admin.png";
import Search from "../assets/Search.png";

const Navbar = () => {
  return (
    <div className="text-white pt-8 pb-3  top-0 z-10 pr-[150px] pl-[150px] ">
      <div className="container flex justify-between items-center ">
        <Link href="/">
          <Image src={Logo} className="w-[120px]" />
        </Link>
        <div className=" pl-4 py-3 pr-[4.2rem]  rounded-3xl bg-white">
          <div className="text-black flex justify-between gap-3 items-center  ">
            <div>
              <Image src={Search} className="w-5 pt-1" />
            </div>
            <div className="text-[16px] font-semibold">
              Search Creator/Product
            </div>
          </div>
        </div>
        <div>
          <div className="flex gap-10 items-center justify-between text-[26px] font-semibold">
            <div>Fav Creators</div>
            <div>Merchandise</div>
            <div>Brand</div>
            <div>Digital</div>
          </div>
        </div>
        <div className="flex justify-between items-center bg-white text-black gap-6 h-[25px] px-5 py-5  rounded-xl cursor-pointer">
          <div>
            <Image
              src={User}
              className="w-6 h-6 rounded-full bg-black px-1 py-1"
            />
          </div>
          <div className="text-xl">↓</div>
        </div>
        <RxHamburgerMenu className="sm:hidden text-[26px]" />
      </div>
    </div>
  );
};

export default Navbar;
