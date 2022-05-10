/* eslint-disable @next/next/link-passhref */
import * as React from "react";
import NavComponent from "../components/NavComponent";




export default function list() {
  return (
    <div className="bg-[#15083E] min-h-screen text-white ">
      <NavComponent />
      <div className="container mx-auto overflow-hidden  py-12">
      <div className="">
        <div className=" mx-auto flex">
          <div className="">
      <h1 className="font-orbitron font-bold text-3xl py-10">List your NFT Project</h1>
      <h3 className="font-orbitron font-bold py-10">Click here to <a className="gradientText" href="http://google.com">submit</a> your project</h3>
          </div>
        </div>
      </div>
    </div>
      </div>
  );
}
