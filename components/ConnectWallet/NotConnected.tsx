/* eslint-disable @next/next/link-passhref */
import * as React from "react";
import ConnectWallet from "./ConnectWallet";

export default function NotConnected() {
  return (
    <div className="bg-[#15083E] min-h-screen text-white ">
      <div className="container mx-auto overflow-hidden  py-12">
        <div className="">
          <div className=" mx-auto flex">
            <div className="">
              <h1 className="font-orbitron font-bold text-3xl py-10">
                You need to Connect your wallet!
              </h1>
              <h3 className="font-orbitron font-bold py-10">
                Click here to{" "}
                <a>
                  <ConnectWallet />
                </a>{" "}
                your Ethereum address
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
