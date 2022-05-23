/* eslint-disable @next/next/link-passhref */
import * as React from "react";
import NavComponent from "../components/NavComponent";
import ProfileCard from "../components/Profile/ProfileCard";




export default function profile() {
  return (
    <div className="bg-[#15083E] min-h-screen text-white ">
      <NavComponent />
      <div className="container mx-auto overflow-hidden  py-12">
      <div className="">
        <div className=" mx-auto flex">
          <div className="">
              <ProfileCard />
          </div>
        </div>
      </div>
    </div>
      </div>
  );
}
