import React from "react";

import money from "../img/money.png";
import carrito from "../img/carrito.png";
import referal from "../img/referal.png";
import Upgrade from "./Upgrade";
import Recomend from "./Recomend";

function Content() {
  const wallet = 2437;
  return (
    <div className=" md:w-[77%] w-[100%] md:pr-5 md:h-[130vh] h-auto bg-[#F2F2F2]">
      <div className="grid grid-cols-3 min-h-[33vh]  gap-4  md:mt-0 mt-2 p-3">
        <div className="md:col-span-1 col-span-3 bg-[#ffff] flex flex-col p-3 justify-around shadow-xl ">
          <div className="flex w-full justify-around">
            <div className="flex flex-col">
              <h2 className=" p-2 text-lg font-semibold font-sans text-[#535353]">
                Main Balance
              </h2>
              <div className="flex items-center">
                <p className=" p-2 text-2xl font-bold from-neutral-300 text-[#F22267] mb-1">
                  {wallet}{" "}
                </p>
                <p className="text-base ml-1 text-[#5e5c5c]">satoshi</p>
              </div>
            </div>
            <img src={money} alt="money" className="h-[90%] md:flex hidden" />
          </div>
          <button className="p-2 bg-[#F22267] rounded-md text-white font-bold mt-2 md:w-[50%] w-[25%] mx-auto">
            Withdraw
          </button>
        </div>

        <div className="md:col-span-1 col-span-3 bg-[#ffff] flex flex-col p-3 justify-around shadow-xl ">
          <div className="flex w-full  justify-around">
            <div className="flex flex-col">
              <h2 className=" p-2 text-lg font-semibold font-sans text-[#535353]">
                Purchase Balance
              </h2>
              <div className="flex items-center">
                <p className=" p-2 text-2xl font-bold from-neutral-300 text-[#1CC7FF] mb-1">
                  {0}{" "}
                </p>
                <p className="text-base ml-1 text-[#5e5c5c]">satoshi</p>
              </div>
            </div>
            <img
              src={carrito}
              alt="carrito"
              className="h-[90%] md:flex hidden"
            />
          </div>
          <button className="p-2 bg-[#1CC7FF] rounded-md text-white font-bold mt-2 md:w-[50%] w-[25%] mx-auto">
            Deposit
          </button>
        </div>
        <div className="md:col-span-1 col-span-3 bg-[#ffff] flex flex-col p-3 justify-around shadow-xl ">
          <div className="flex w-full  justify-around">
            <div className="flex flex-col">
              <h2 className=" p-2 text-lg font-semibold font-sans text-[#535353]">Referrals</h2>
              <div className="flex items-center">
                <p className=" p-2 text-2xl font-bold from-neutral-300 text-[#3FD892] mb-1">
                  {0}{" "}
                </p>
                <p className="text-base ml-1"></p>
              </div>
            </div>
            <img
              src={referal}
              alt="referal"
              className="h-[90%] md:flex hidden"
            />
          </div>
          <button className="p-2 bg-[#3FD892] rounded-md text-white font-bold md:w-[50%] w-[25%] mx-auto mt-2">
            Statistics
          </button>
        </div>
      </div>
      <Upgrade />
      <Recomend />
    </div>
  );
}

export default Content;
