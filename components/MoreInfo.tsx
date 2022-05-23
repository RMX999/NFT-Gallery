/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from "react";

export default function MoreInfo() {
  return (
    <div className="w-full relative ">
      <div className="w-full ">
        <img src="bg.png" alt="" className="w-full " />
      </div>
      
     <div className="w-full flex justify-center items-center">
      <div className="flex gradient sm:max-w-xl  max-w-md border-2 border-gray-400 absolute sm:-bottom-12 sm:right-10 rounded-xl backdrop-blur-md flex-col px-6 py-3 justify-center items-center text-center ">
        <h1 className="font-mono text-4xl sm:text-5xl py-4">What are NFT's ?</h1>
        <p className="text-xl">
        An NFT is a digital asset that represents real-world objects like art, music, in-game items and videos. They are bought and sold online, frequently with cryptocurrency, and they are generally encoded with the same underlying software as many cryptos.
        </p>
      </div>
    </div> 
    </div>
  );
}
