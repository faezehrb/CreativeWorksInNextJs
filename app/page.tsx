"use client"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap-trial/ScrollTrigger"
import { ScrollSmoother } from "gsap-trial/ScrollSmoother"
import { useGSAP } from "@gsap/react"
import React, {  useRef } from "react"
import NightSky from "../components/appearance/nightSky"
import FirstSoulSVG from "@/components/svg/firstSoulSVG"
import SecondSoulSVG from "@/components/svg/secondSoulSVG"
import ThirdSoulSVG from "@/components/svg/thirdSoulSVG"
import ForthSoulSVG from "@/components/svg/forthSoulSVG"
import First from "../components/sections/first"
import Second from "../components/sections/second"
import Third from "../components/sections/third"
import Forth from "../components/sections/forth"
import HamburgerMenu from "../components/navbar/hamburgerMenu"
import { useAppContext } from "./context"
import Clouds from "@/components/appearance/clouds"

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

function App() {
  const main: any = useRef()
  const smoother: any = useRef()

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
  )
  
  const { nightMode, setNightMode } = useAppContext()

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
            {nightMode ? <FirstSoulSVG /> : undefined}
          </section>
          <section className="relative w-screen h-screen" id="secondSec">
            <Second />
            {nightMode ? <SecondSoulSVG /> : undefined}
          </section>
          <section className="relative w-screen h-screen" id="thirdSec">
            <Third />
            {nightMode ? <ThirdSoulSVG /> : undefined}
          </section>
          <section className="relative w-screen h-screen" id="forthSec">
            <Forth />
            {nightMode ? <ForthSoulSVG /> : undefined}
          </section>
        </div>
      </div>
      {nightMode ? <NightSky /> : <Clouds/>}
    </>
  )
}
export default App
