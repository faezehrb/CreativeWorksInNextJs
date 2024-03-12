"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap-trial/ScrollTrigger";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
import { useGSAP } from "@gsap/react";
import React, { Component, FC, useRef, useState } from "react";
import NightSky from "../appearance/nightskystar";
import First from "../components/sections/first";
import Second from "../components/sections/second";
import Third from "../components/sections/third";
import Forth from "../components/sections/forth";
import HamburgerMenu from "../components/navbar/hamburgerMenu";
import { useAppContext } from "./context";
import Clouds from "@/appearance/clouds";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {
  const main: any = useRef();
  const smoother: any = useRef();

  useGSAP(
    () => {
      smoother.current = ScrollSmoother.create({
        smooth: 0.8,
        effects: true,
      });
      ScrollTrigger.create({
        start: "bottom bottom",
        markers: true,
      });
    },
    { scope: main }
  );

  const { nightMode, setNightMode } = useAppContext();

  return (
    <>
      <section className="fixed top-0 w-full z-50">
        <HamburgerMenu />
      </section>
      <div id="smooth-wrapper" ref={main}>
        <div
          className={`${nightMode ? "nightMode" : "morningMode"}`}
          id="smooth-content">
          <section className="relative w-screen h-screen" id="firstSec">
            <First />
          </section>
          <section className="relative w-screen h-screen" id="secondSec">
            <Second />
          </section>
          <section className="relative w-screen h-screen" id="thirdSec">
            <Third />
          </section>
          <section className="relative w-screen h-screen" id="forthSec">
            <Forth />
          </section>
        </div>
      </div>
      {nightMode ? <NightSky /> : <Clouds />}
    </>
  );
}
export default App;
