import React from "react";
import PromoCard from "../nft/PromotedCard";
import NormalCard from '../nft/NormalCard';
import UpComming from "../nft/UpComming";
import PromotedUpCard from "../nft/PromotedUpComming";

export default function PromoHeader() {
  return (
    <div className="container mx-auto overflow-hidden  py-12">
      <div className="">
        <div className=" mx-auto flex">
          <div className="">
      <h1 className="font-orbitron font-bold text-3xl py-10">Promoted</h1>
      <PromotedUpCard />
            {/* <PromoCard /> */}
      <h1 className="font-orbitron font-bold text-3xl py-10">Explore</h1>
            <NormalCard />
            <h1 className="font-orbitron font-bold text-3xl py-10">Up Comming</h1>
            <UpComming />
          </div>
        </div>
      </div>
    </div>
  );
}
