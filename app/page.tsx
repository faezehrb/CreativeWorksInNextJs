
'use client'

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap-trial/ScrollTrigger";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import NightSky from "../components/appearance/nightSky";
import First from "../components/sections/first";
import Second from "../components/sections/second";
import Third from "../components/sections/third";
import Forth from "../components/sections/forth";
import HamburgerMenu from "../components/navbar/hamburgerMenu";
import { useAppContext } from "../components/context";
import CloudContainer from "@/components/appearance/clouds";
import ModeBtn from "@/components/navbar/modeBtn"
import SecNav from "@/components/navbar/secNav";
import ContactForm from "@/components/sections/fifth";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

interface Company {
  id: number,
  name: string,
  img: string,
  position: string,
  detail: string
}

// export const getStaticProps: GetStaticProps = async () => {
//   const res = await fetch('http://localhost:3000/api/companies', { method: 'GET' })
//   const companies: Company[] = (await res.json()) as Company[]
//   return { props: { companies }}
// }


export default function App() {
  const main: any = useRef()
  const smoother: any = useRef()
  const { nightMode } = useAppContext()

  useGSAP(() => {
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
  }, { scope: main })

  return (
    <>
     
      <div id="smooth-wrapper" ref={main}>
        <div
          className={`${nightMode ? "nightMode font-rubikscribble" : "morningMode font-madimione"} transition-colors md:grid ease-in duration-500`}
          id="smooth-content"
        >
          {nightMode ? <NightSky /> : <CloudContainer />}
          <section className="relative w-screen " id="firstSec">
            <First />
          </section>
          <section className="relative w-screen min-h-screen" id="secondSec">
            <Second />
          </section>
          <section className="relative w-screen min-h-screen" id="thirdSec">
            <Third />
          </section>
          <section className="relative w-screen min-h-screen" id="forthSec">
            <Forth />
          </section>
          <section className="relative w-screen h-screen" id="fifthSec">
            <ContactForm />
          </section>
        </div>
      </div>
       <div>
        <HamburgerMenu />
      </div>
      <div className="">
        <ModeBtn />
        <SecNav />
      </div>
    </>
  )
}

