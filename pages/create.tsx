/* eslint-disable @next/next/link-passhref */
import * as React from "react";
import { useMoralis } from "react-moralis";
import NotConnected from "../components/ConnectWallet/NotConnected";
import NavComponent from "../components/NavComponent";
import CreateDashBord from "../components/CreateNFT/CreateDashBord";

export default function list() {

    const { authenticate, isAuthenticated, user } = useMoralis();

    const login = async () => {
      if (!isAuthenticated) {

        await authenticate()
          .then(function (user) {
            console.log(user!.get("ethAddress"));
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }

    function ifLogIn (){
        if (user){
      return ( 
      <CreateDashBord />
      )
        }
        else 
            return(<NotConnected />)
    }
  return (
    <div className="bg-[#15083E] min-h-screen text-white ">
      <NavComponent />
      <div className="container mx-auto overflow-hidden  py-12">
      <div className="">
        <div className=" mx-auto flex">
          <div className="">
        {ifLogIn()}
          </div>
        </div>
      </div>
    </div>
      </div>
  );
}
