import React, { useState } from "react";
import { AiOutlineAlignLeft } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import { FaPowerOff } from "react-icons/fa";
import { BiDotsVertical } from "react-icons/bi";
import { BiUserCircle } from "react-icons/bi";
import { GiCutDiamond } from "react-icons/gi";

import logo from "../img/coinpayu.png";

function NavBar() {
  const [toogle, setToogle] = useState(true);

  return (
    <div className="w-full h-[13vh] bg-[#ffff] flex  items-center px-3 justify-between fixed top-0 left-0 ">
      <button className="w-10 h-10 flex md:hidden ml-3 text-2xl items-center justify-center">
        <AiOutlineAlignLeft />
      </button>
      <div className="h-[100%] flex w-[53%] md:justify-between">
        <div className="flex items-center mr-10  h-[100%] ">
          <img
            src={logo}
            alt="logo"
            className="w-45 h-[60%] ml-[35px] p-2 mt-3 mb-1"
          />
        </div>
        <div className="h-[100%] md:flex hidden items-center justify-between w-[350px]">
          <div className="flex items-center">
            <button className="flex items-center justify-center text-3xl text-[#1CC7FF]">
              <BiUserCircle />
            </button>

            <p className="m-3 text-lg font-bold  hover:text-[#1CC7FF]">
              escalante94
            </p>
          </div>
          <div className="flex items-center">
            <button className="flex items-center justify-center text-lg text-[#1CC7FF] border-2 border-[#1CC7FF] p-1 rounded-full">
              <GiCutDiamond />
            </button>

            <p className="m-3 text-lg font-bold hover:text-[#1CC7FF]">Point:1.0</p>
          </div>
        </div>
      </div>

      <div className="md:flex hidden text-2xl items-center mr-4 ">
        <button className="w-10 h-10 flex items-center justify-center mr-5 scale-150 text-[#FBAD4C]">
          <IoMdNotifications />
        </button>
        <button className="w-8 h-8 p-2 text-white flex items-center justify-center mx-2  bg-[#3FD892] rounded-full cursor-pointer">
          <FaPowerOff />
        </button>
      </div>

      <button className="flex md:hidden w-10 h-[100%] text-3xl items-center justify-center cursor-pointer">
        <BiDotsVertical />
      </button>
    </div>
  );
}

export default NavBar;
