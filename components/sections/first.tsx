
'use client'

import LogoSVG from "../svg/logoSVG"
import FirstSoulSVG from "../svg/firstSoulSVG"

const First = () => {

  return (
    <> 
      <FirstSoulSVG /> 
      <div className="container mx-auto h-screen flex items-center justify-center">
        <div className="grid grid-rows-1 grid-cols-3 grid-flow-col w-full">
          <div className="col-span-2 ">
            <h1 className="uppercase text-8xl">I'm Faezeh</h1>
            <h2 className="uppercase">A Frontend Developer</h2>
          </div>
          <div className="col-span-1  ">
           {/* <CircularSkills /> */}
            <LogoSVG />
           
          </div>
        </div>
      </div>
    </>
  )
}

export default First

