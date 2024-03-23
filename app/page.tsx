"use client"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap-trial/ScrollTrigger"
import { ScrollSmoother } from "gsap-trial/ScrollSmoother"
import { useGSAP } from "@gsap/react"
import React, {  useRef } from "react"
import NightSky from "../components/appearance/nightSky"
import First from "../components/sections/first"
import Second from "../components/sections/second"
import Third from "../components/sections/third"
import Forth from "../components/sections/forth"
import HamburgerMenu from "../components/navbar/hamburgerMenu"
import { useAppContext } from "../components/context"
import CloudContainer from "@/components/appearance/clouds"
import ModeBtn from "@/components/navbar/modeBtn"

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

function App() {
    const main: any = useRef()
    const smoother: any = useRef()

  const { nightMode } = useAppContext()

    useGSAP(
      () => { 
        smoother.current = ScrollSmoother.create({
          smooth: 0.8,
          effects: true,
        })
          ScrollTrigger.create({
            start: "bottom bottom",
            markers: true,
          })
      },{ scope: main }
   )

  return (
    <>
      <section className="fixed top-0 w-full z-50">
        <HamburgerMenu />
      </section>
      <section>
        <ModeBtn />
      </section>
      <div id = "smooth-wrapper" ref = {main}>
        <div
          className = {`${nightMode ? "nightMode font-rubikscribble" : "morningMode font-madimione"} transition-colors ease-in duration-200`}
          id = "smooth-content">
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
          {nightMode ? <NightSky /> : <CloudContainer/>}
      </div>
    </>
  )
}
export default App
