/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/link-passhref */
import Link from "next/link";
import * as React from "react";
import Hero from "../components/Hero";
import MainExplore from "../components/MainExplore/MainExplore";
import MoreInfo from "../components/MoreInfo";
import NavComponent from "../components/NavComponent";

export default function Home() {
  return (
    <div className="text-white ">
      <NavComponent />
      <Hero />
      <MoreInfo />
      <section id="explore">
      <MainExplore/>
      </section>
    </div>
  );
}
