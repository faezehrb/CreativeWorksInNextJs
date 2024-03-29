
'use client'

import LogoSVG from "../svg/logoSVG"
import FirstSoulSVG from "../svg/firstSoulSVG"

const First = () => {

  return (
    <> 
      <FirstSoulSVG /> 
      <div className="container mx-auto h-screen grid place-items-center">
        <div className="grid grid-cols-6 md:grid-cols-1  w-full">
          <div></div>
          <div className="col-span-3  content-center md:justify-items-center md:place-content-center md:justify-self-center">
            <h1 className="uppercase text-8xl md:text-6xl">I'm Faezeh</h1>
            <h2 className="uppercase md:text-center">A Frontend Developer</h2>
          </div>
          <div className="flex justify-end md:justify-items-center md:place-content-center md:justify-self-center">
            <LogoSVG />
          </div>
          <div></div>
        </div>
      </div>
    </>
  )
}

export default First

