
'use client'

import { useEffect, useRef, useState } from "react"
import NightSky from "../components/appearance/nightSky"
import HamburgerMenu from "../components/navbar/hamburgerMenu"
import { useAppContext } from "../components/context"
import CloudContainer from "../components/appearance/clouds"
import ModeBtn from "../components/navbar/modeBtn"
import SecNav from "../components/navbar/secNav"
import ContactForm from "../components/sections/contactform"
import Intro from "../components/sections/intro"
import AboutMe from "../components/sections/aboutme"
import Carrer from "../components/sections/carrer"
import Skills from "../components/sections/skills"

// gsap.registerPlugin(ScrollTrigger)


export default function App({ serverData }: any) {
  const main: any = useRef()
  const { nightMode } = useAppContext()

  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger)

  //   gsap.utils.toArray('.your-target-class').forEach((target: any) => {
  //     gsap.from(target, {
  //       opacity: 0,
  //       y: 50,
  //       duration: 1,
  //       scrollTrigger: {
  //         trigger: target,
  //         start: 'top 80%',
  //         end: 'bottom 20%',
  //         toggleActions: 'play none none reverse',
  //       },
  //     })
  //   })
    
  //   // const smoother = ScrollSmoother.create({ smooth: 0.8, effects: true })
  //   // ScrollTrigger.create({
  //   //   trigger: 'body',
  //   //   start: 'top top',
  //   //   end: 'bottom bottom',
  //   //   markers: false,
  //   // })

  // }, [])


  return (
    <>
    <body className={`${nightMode ? "nightMode imfell" : "morningMode ntr"} `}>
      <div id= "mainContent">
        <div ref={main}
          className="overflow-x-hidden transition-colors md:grid ease-in duration-500"
          id="content"
        >
          {nightMode ? <NightSky /> : <CloudContainer />}
          <section className="relative w-screen " id="firstSec">
            <Intro />
          </section>
          <section className="relative w-screen min-h-screen md:mb-40" id="secondSec">
            <AboutMe />
          </section>
          <section className="relative w-screen min-h-screen" id="thirdSec">
            <Carrer />
          </section>
          <section className="relative w-screen min-h-screen md:mt-52" id="forthSec">
            <Skills />
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
    </body>
    </>
  )
}

// export const getStaticProps = () => {
//   const serverData = Third() 
//   return { props: { serverData } }
// }
