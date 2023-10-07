import React from "react";

function Upgrade() {
  return (
    <div className=" md:h-[15vh] h-[20vh] bg-[#ffff] mx-3 flex items-center md:justify-between  justify-around md:px-4 px-2 mt-3 md:flex-row flex-col">
      <div className="flex flex-col pl-5 font-sans font-normal" >
        <p className="p-0">Membership: Standard Since: 2022-11-06</p>
        <p className="p-0">Become our partner to share more profit from CoinPayU!</p>
      </div>
      <button className="p-2 bg-[#FBAD4C] rounded-md mr-3 text-white font-bold md:w-[15%] w-full">Upgrade</button>
    </div>
  );
}

export default Upgrade;
