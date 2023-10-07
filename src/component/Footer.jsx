import React, { useState } from "react";
import { GiFeather } from "react-icons/gi";
import { BsTwitter } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { GrYoutube } from "react-icons/gr";
import { MdFileDownload } from "react-icons/md";
import { TbMoonFilled } from "react-icons/tb";
import { BsFillSunFill } from "react-icons/bs";

function Footer() {
  const [mode, setMode] = useState(false);

  const changeMode = () => {
    setMode(!mode);
  };

  return (
    <div className="w-full md:h-[42vh] h-[80vh] bg-[#43494B] flex flex-col justify-between text-[#FFFFF3] ">
      <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-1 p-4 px-5 w-full">
        <div className="md:h-[90%]  ">
          <h2 className="py-2 text-xl">About</h2>
          <ul className="text-[#D9E4DA] md:flex flex-col hidden">
            <li className=" text-sm font-sans">About Us</li>
            <li className=" text-sm font-sans">Help</li>
            <li className=" text-sm font-sans">Privacy Policy</li>
            <li className=" text-sm font-sans">Terms of Service</li>
            <li className=" text-sm font-sans">Affiliate</li>
          </ul>
        </div>

        <div className="h-[90%]  ">
          <h2 className="py-2 text-xl">Info</h2>
          <ul className="text-[#D9E4DA] md:flex flex-col hidden">
            <li className=" text-sm font-sans">Testimonials</li>
            <li className=" text-sm font-sans">Calculator</li>
            <li className=" text-sm font-sans">Video Guide</li>
            <li className=" text-sm font-sans">Payment Proof</li>
            <li className=" text-sm font-sans">Campaign</li>
          </ul>
        </div>

        <div className="h-[90%] ">
          <h2 className="py-2 text-xl">Faucet</h2>
          <ul className="text-[#D9E4DA] md:flex flex-col hidden">
            <li className=" text-sm font-sans">Bitcoin Faucet</li>
            <li className=" text-sm font-sans">Ethereum Faucet</li>
            <li className=" text-sm font-sans">Dogecoin Faucet</li>
            <li className=" text-sm font-sans">More Faucet</li>
          </ul>
        </div>

        <div className="h-[90%] ">
          <h2 className="py-2 text-xl">Staking</h2>
          <ul className="text-[#D9E4DA] md:flex flex-col hidden">
            <li className=" text-sm font-sans">Oasis Network Staking</li>
            <li className=" text-sm font-sans">Cardano Staking</li>
            <li className=" text-sm font-sans">Tron Staking</li>
            <li className=" text-sm font-sans">More Staking</li>
          </ul>
        </div>

        <div>
          <h2 className="py-2 text-xl">Fund</h2>
          <ul className="text-[#D9E4DA] md:flex flex-col hidden">
            <li className=" text-sm font-sans">Article Fund</li>
            <li className=" text-sm font-sans">Staking Fund</li>
          </ul>
        </div>

        <div className="h-[90%]  ">
          <h2 className="py-2 text-xl">Community</h2>
          <ul className="flex-col">
            <li className="px-1 text-sm font-sans">
              <div className="flex w-full h-10 text-[#BDBFC0] my-1">
                <span className="flex justify-center items-center h-[100%] mx-2 w-10 text-2xl hover:scale-125 hover:text-orange-300">
                  <GiFeather />
                </span>
                <span className="flex justify-center items-center h-[100%] mx-2 w-10 text-2xl hover:scale-125 hover:text-[#16C9FF]">
                  <BsTwitter />
                </span>
                <span className="flex justify-center items-center h-[100%] mx-2 w-10 text-2xl hover:scale-125 hover:text-[#16C9FF]">
                  <FaTelegramPlane />
                </span>
                <span className="flex justify-center items-center h-[100%] mx-2 w-10 text-2xl hover:scale-125 hover:text-[#129AF7]">
                  <BsFacebook />
                </span>
                <span className="flex justify-center items-center h-[100%] mx-2 w-10 text-2xl hover:scale-125 hover:text-[#FE0000]">
                  <GrYoutube />
                </span>
              </div>
            </li>
            <li className="px-1 text-sm font-sans"></li>
            <li className="px-1 text-sm font-sans">
              <div className="w-full flex">
                <button
                  className="h-8 w-36 bg-[#1D1D1D] text-[#F5F4F4] m-1 rounded-3xl font-semibold flex items-center justify-center"
                  onClick={changeMode}
                >
                  {mode ? (
                    <div className="flex items-center justify-center">
                      <span className="flex items-center justify-center text-[#FFBE31] text-2xl mx-2">
                        <BsFillSunFill />
                      </span>
                      Day
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <span className="flex items-center justify-center w-7 h-[100%] text-[#FFBE31] text-2xl mx-1">
                        <TbMoonFilled />
                      </span>
                      Night
                    </div>
                  )}
                </button>
                <button className="h-8 w-36 bg-[#1D1D1D] text-[#F5F4F4] m-1 rounded-3xl font-semibold flex items-center justify-center">
                  <span className="w-7 h-[100%] text-[#16C9FF] flex items-center justify-center text-2xl ">
                    <MdFileDownload />
                  </span>
                  APP
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-white h-[9vh] border-t-[1px] border-gray-400 border-opacity-20 text-sm flex justify-center items-center">
        Copyrighted © Coinpayu 2019 - 2023. All rights reserved. V11
      </div>
    </div>
  );
}

export default Footer;
