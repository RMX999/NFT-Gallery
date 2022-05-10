import React from "react";
import Link from 'next/link'

export default function Header() {
  return (
    <div className="flex items-center justify-around flex-wrap  px-4">
      <div className="max-w-xl text-white my-10">
        <h1 className="text-5xl md:text-[56px]  font-bold">
          Discover verified <span className="gradientText">NFT</span> projects
        </h1>
        <p className="text-[22px] my-6">
        We have compiled a list of upcoming NFT drops so that you don't miss out on any prominent projects.
Visit this page regularly to see up-to-date information regarding projects that are gaining popularity.{" "}
        </p>
        <Link href="/explore">
        <button className="text-[#8C72FF] bg-white rounded-xl px-3 py-1">
          Explore{" "}
        </button>
        </Link>
      </div>
      <div>
        <img src="Group3.png" alt="pixi-world" />
      </div>
    </div>
  );
}
