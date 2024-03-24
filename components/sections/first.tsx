
'use client'

import FirstSoulSVG from "../svg/firstSoulSVG"

const First = () => {

  return (
    <> 
      <FirstSoulSVG /> 
      <div className="container mx-auto h-screen flex items-center justify-center">
        <div className="grid grid-rows-3 grid-flow-col justify-items-center gap-4 w-full">
          <div className="row-span-3 content-center">
            <h1 className="uppercase text-8xl">I'm Faezeh</h1>
            <h2 className="uppercase">A Frontend Developer</h2>
          </div>
          <div className="col-span-2 ...">02</div>
          <div className="row-span-2 col-span-2 ...">03</div>
        </div>
      </div>
    </>
  )
}

export default First

