/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Link from 'next/link'


export default function Hero() {
  return (
    <div className="container mx-auto py-10 flex flex-wrap justify-around items-center px-4">
      <div className="max-w-2xl ">
        <div className="text-left">
          <h1 className="font-spartan font-bold text-6xl">
            Discover, collect, and sell{" "}
            <span className="bg-gradient-to-br from-indigo-500  via-purple-500  to-pink-500 bg-clip-text text-transparent ">
              {" "}
              Timeless
            </span>{" "}
            NFTs
          </h1>
          <p className="font-rajdhani font-semibold text-xl">
          We have compiled a list of upcoming NFT drops so that you don't miss out on any prominent projects.
Visit this page regularly to see up-to-date information regarding projects that are gaining popularity.{" "}
          </p>
          <div className="flex flex-around py-10">
          <Link href="#explore">

            <button className="bg-gradient-to-r from-indigo-500  via-purple-500 to-pink-500 font-orbitron px-[2.5em] font-bold py-[.7em] rounded-lg">
              Explore
            </button>
            </Link>

            <button>
          <Link href="/create">
            <h1 className="bg-gradient-to-br from-indigo-500  via-purple-500  to-pink-500  font-orbitron px-[2.5em] font-bold py-[.7em] rounded-lg bg-clip-text text-transparent ">
              Create NFT's
            </h1>
            </Link>
            </button>
          </div>
        </div>
        <>
          <div className="grid grid-cols-2 md:flex md:divide-x gap-4  py-20">
            <div className="px-6 md:px-8">
              <span className="block  text-lg md:text-xl font-bold text-center md:text-left">
                0
              </span>
              <span className="block  text-sm md:text-base font-semibold text-center md:text-left">
                Verified
              </span>
            </div>

            <div className="px-6 md:px-8">
              <span className="block  text-lg md:text-xl font-bold text-center md:text-left">
                0
              </span>
              <span className="block  text-sm md:text-base font-semibold text-center md:text-left">
                Projects
              </span>
            </div>

            <div className="px-6 md:px-8">
              <span className="block  text-lg md:text-xl font-bold text-center md:text-left">
                0
              </span>
              <span className="block  text-sm md:text-base font-semibold text-center md:text-left">
                Creators
              </span>
            </div>
          </div>
        </>
      </div>
      <div className="flex-end">
        <img src="/NFT-Gallery.png" alt="apes" className="rounded-3xl" />
      </div>
    </div>
  );
}
