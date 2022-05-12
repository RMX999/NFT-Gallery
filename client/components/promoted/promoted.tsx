import React from "react";
import PromoCard from "../nft/PromotedCard";
import NormalCard from "../nft/NormalCard";
import UpComming from "../nft/UpComming";
import PromotedUpCard from "../nft/PromotedUpComming";
import Carousel from "carousel-react-rcdev";

export default function PromoHeader() {
  return (
    <div className="container mx-auto overflow-hidden  py-12">
      <div className="">
        <div className=" mx-auto flex">
          <div className="">
            <h1 className="font-orbitron font-bold text-3xl py-10">Promoted</h1>
              <div>
                <PromotedUpCard />
              </div>
            {/* <h1 className="font-orbitron font-bold text-3xl py-10">Explore</h1>
              <div>
                <NormalCard />
              </div>
            <h1 className="font-orbitron font-bold text-3xl py-10">
              Up Comming
            </h1>
              <div>
                <UpComming />
              </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <PromoCard />

<Carousel>
  <div>
  <UpComming />

  </div>

</Carousel>; */
}
