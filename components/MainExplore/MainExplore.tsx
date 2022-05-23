import React from "react";
import PromoCard from "./PromoCard";

export default function MainExplore() {
  return (
    <div className="container mx-auto overflow-hidden  py-12">
      <div className="">
        <div className=" mx-auto flex">
          <div className="">
            <h1 className="font-orbitron font-bold text-3xl py-10">Promoted</h1>
              <div>
                <PromoCard />
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
