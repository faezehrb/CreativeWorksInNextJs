
'use client'

import { useAppContext } from "../context"
import FirstSoulSVG from "../svg/firstSoulSVG"
import MoonSVG from "../svg/moonSVG"
import SunSVG from "../svg/sunSVG"

const First = () => {
  const { nightMode } = useAppContext()
  return (
    <> 
      <FirstSoulSVG /> 
      <div className="container mx-auto min-h-screen grid place-items-center z-[10]">
        <div className="grid grid-cols-6 md:grid-cols-1 w-full">
          <div></div>
            <div className="col-span-3 content-center md:justify-items-center md:place-content-center md:justify-self-center">
              <h1 className="uppercase md:text-center text-8xl md:text-6xl">I'm Faezeh</h1>
              <h2 className="uppercase md:text-center">A Frontend Developer</h2>
            </div>
            <div className="flex justify-end md:justify-items-center md:place-content-center mt-12 transition-all duration-500 md:justify-self-center">
              {nightMode ? < MoonSVG /> : < SunSVG />}
            </div>
          <div></div>
        </div>
      </div>
    </>
  )
}

export default First

