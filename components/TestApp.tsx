'use client'

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap-trial/ScrollTrigger"
import { ScrollSmoother } from "gsap-trial/ScrollSmoother"
import { useGSAP } from "@gsap/react"
import React, {  FC, ReactNode, useRef } from "react"
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
interface Iapp {
  children:any;
}
const TestApp:FC<Iapp>=({children})=> {
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
            trigger: "body",
            start: "top top",
            end: "bottom bottom",
            markers: false,
          })
      },{ scope: main }
   )
   
  return (
    <>
      <section>
        <HamburgerMenu />
      </section>
      <section className="">
        <ModeBtn />
      </section>
      <div id = "smooth-wrapper" ref = {main}>
        <div
          className = {`${nightMode ? "nightMode font-rubikscribble" : "morningMode font-madimione"} transition-colors md:grid " ease-in duration-500`}
          id = "smooth-content">
            {nightMode ? <NightSky /> : <CloudContainer/>}
            <section className="relative w-screen min-h-screen pt-10 pb-10" id="firstSec">
              <First />
            </section>
            <section className="relative w-screen min-h-screen pt-10 pb-10" id="secondSec">
              <Second />
            </section>
            <section className="relative w-screen min-h-screen pt-10 pb-10" id="thirdSec">
              {children}
            </section>
            <section className="relative w-screen min-h-screen pt-10 pb-10" id="forthSec">
              <Forth />
            </section>
        </div>
      </div>
    </>
  )
}
export default TestApp