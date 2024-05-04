
'use client'

import {useAppContext} from "../context"
import FirstSoulSVG from "../svg/firstSoulSVG"
import MoonSVG from "../svg/moonSVG"
import SunSVG from "../svg/sunSVG"

const Intro = () => {
  const { nightMode } = useAppContext()
  return (
    <> 
      <FirstSoulSVG /> 
      <div className="container min-h-screen grid place-items-center z-[10]">
        <div className="grid grid-cols-6 md:grid-cols-1 w-full">
          <div></div>
            <div className="col-span-3 content-center pr-10 md:pr-0  lg:justify-items-center md:place-content-center md:justify-self-center">
              <h1 className={`${nightMode ? "text-[60px] md:text-3xl" : "text-7xl md:text-6xl"}uppercase md:text-center font-bold text-white `}>HELLO THERE!</h1>
              <h2 className={`${nightMode ? "" : "text-2xl md:text-1xl"} uppercase text-white md:text-center`}>I'm a Frontend Developer</h2>
            </div>
            <div className="flex justify-end md:justify-items-center md:place-content-center transition-all p-10 duration-500 md:justify-self-center">
              {nightMode ? < MoonSVG /> : < SunSVG />}
            </div>
          <div></div>
        </div>
      </div>
    </>
  )
}

export default Intro

