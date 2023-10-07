import React, { useState } from "react";
import { RiDashboardFill } from "react-icons/ri";
import { BsCalendarCheck } from "react-icons/bs";
import { GiSandsOfTime } from "react-icons/gi";
import { FaChartLine } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { GiNotebook } from "react-icons/gi";
import { BsThreeDots } from "react-icons/bs";
import { ImEye } from "react-icons/im";

function SideBar() {
  const [show, setShow] = useState(false);

  const showContent = () => {
    setShow(!show);
  };

  return (
    <div
      id="sidebar"
      className=" md:flex hidden  md:w-[23%]  bg-[#ffff] flex-col overflow-auto text-[#6d6c6c] "
    >
      <ul>
        <li>
          <div className="w-full h-[10vh]  pl-16 bg-[#1CC7FF] text-lg font-semibold font-sans text-center flex text-white cursor-pointer ">
            <span className="flex justify-center items-center p-2">
              <RiDashboardFill />
            </span>
            <p className="flex items-center ml-2">Dashboard</p>
          </div>
        </li>

        <li className="hover:bg-gray-200 transition-all">
          <button
            className="w-full h-[10vh] transition-all pl-16 text-base font-normal items-center flex border-b-[1px] border-gray-400 border-opacity-20 cursor-pointer"
            onClick={showContent}
          >
            <span className="flex justify-center items-center p-2  text-2xl ">
              <ImEye />
            </span>
            <p className="flex items-center ml-2">View Adds</p>
          </button>
          {show ? (
            <ul className=" text-center cursor-pointer">
              <li className="p-2 border-b-[1px] border-gray-400 border-opacity-20 hover:bg-gray-50 transition-all h-[8vh] flex items-center justify-center">
                Surf Adds
              </li>
              <li className="p-2 border-b-[1px] border-gray-400 border-opacity-20 hover:bg-gray-50 transition-all h-[8vh] flex items-center justify-center">
                Window Ads
              </li>
              <li className="p-2 border-b-[1px] border-gray-400 border-opacity-20 hover:bg-gray-50 transition-all h-[8vh] flex items-center justify-center">
                Article Ads
              </li>
              <li className="p-2 border-b-[1px] border-gray-400 border-opacity-20 hover:bg-gray-50 transition-all h-[8vh] flex items-center justify-center">
                Video Ads
              </li>
            </ul>
          ) : (
            ""
          )}
        </li>

        <li className="hover:bg-gray-200 transition-all">
          <div className="w-full h-[10vh]  pl-16  text-base font-normal text-center flex border-b-[1px] border-gray-400 border-opacity-20 cursor-pointer">
            <span className="flex justify-center items-center p-2 text-2xl">
              <BsCalendarCheck />
            </span>
            <p className="flex items-center ml-2">Offers</p>
          </div>
        </li>

        <li className="hover:bg-gray-200 transition-all">
          <div className="w-full h-[10vh] pl-16 text-base font-normal text-center flex border-b-[1px] border-gray-400 border-opacity-20 cursor-pointer">
            <span className="flex justify-center items-center p-2 text-2xl">
              <GiSandsOfTime />
            </span>
            <p className="flex items-center ml-2">Faucet</p>
          </div>
        </li>

        <li className="hover:bg-gray-200 transition-all">
          <div className="w-full h-[10vh]  pl-16 text-base font-normal text-center flex border-b-[1px] border-gray-400 border-opacity-20 cursor-pointer">
            <span className="flex justify-center items-center p-2 text-2xl">
              <FaChartLine />
            </span>
            <p className="flex items-center ml-2">Advertise</p>
          </div>
        </li>

        <li className="hover:bg-gray-200 transition-all">
          <div className="w-full h-[10vh]  pl-16 text-base font-normal text-center flex border-b-[1px] border-gray-400 border-opacity-20 cursor-pointer">
            <span className="flex justify-center items-center p-2 text-2xl">
              <IoIosPeople />
            </span>
            <p className="flex items-center ml-2">Afiliate</p>
          </div>
        </li>

        <li className="hover:bg-gray-200 transition-all">
          <div className="w-full h-[10vh]  pl-16 text-base font-normal text-center flex border-b-[1px] border-gray-400 border-opacity-20 cursor-pointer">
            <span className="flex justify-center items-center p-2 text-2xl">
              <GiHamburgerMenu />
            </span>
            <p className="flex items-center ml-2">History</p>
          </div>
        </li>

        <li className="hover:bg-gray-200 transition-all">
          <div className="w-full h-[10vh]  pl-16 text-base font-normal text-center flex border-b-[1px] border-gray-400 border-opacity-20 cursor-pointer">
            <span className="flex justify-center items-center p-2 text-2xl">
              <GiNotebook />
            </span>
            <p className="flex items-center ml-2">Profile</p>
          </div>
        </li>

        <li className="hover:bg-gray-200 transition-all">
          <div className="w-full h-[10vh]  pl-16 text-base font-normal text-center flex border-b-[1px] border-gray-400 border-opacity-20 cursor-pointer">
            <span className="flex justify-center items-center p-2 scale-125">
              <BsThreeDots />
            </span>
            <p className="flex items-center ml-2">More</p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
