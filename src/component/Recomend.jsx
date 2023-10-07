import React from "react";

function Recomend() {
  return (
    <div className=" md:[15vh] h-[27vh] bg-[#ffff] md:flex-row flex-col mx-3 mb-4 flex items-center md:justify-between justify-around md:px-4 px-2 mt-4  ">
      <div className="flex flex-col w-full font-sans  font-normal m-2">
        <div className="md:p-1 p-2 flex md:flex-row md:items-center flex-col md:ml-3">
          <p className="md:mr-3 mb-2">Advertisement sales:</p>
         <div className="bg-[#F2F2F2] md:h-[5vh] md:w-[600px] w-full rounded-2xl">
         <div className="w-[25%] h-[100%] bg-[#1CC7FF] rounded-2xl text-center text-sm text-white flex items-center justify-center font-medium">0 | 0.002BTC</div>
         </div>
        </div>
        <p className="p-1 md:ml-3">Recommend Ads. Earn up to 20%!</p>
      </div>
      <button className="p-2 bg-[#1CC7FF] rounded-md text-white font-bold md:w-[17%] w-full md:mb-0 mb-2 mr-3">
        More
      </button>
    </div>
  );
}

export default Recomend;
