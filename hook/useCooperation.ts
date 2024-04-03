
'use client'


import { gsap } from "gsap"e
import { MotionPathPlugin } from "gsap/MotionPathPlugin"
import { useIsomorphicLayoutEffect } from "usehooks-ts"

const UseCooperation = () => {

  useIsomorphicLayoutEffect(() => {
        gsap.registerPlugin(MotionPathPlugin)
        const tl = gsap.timeline({
            scrollTrigger: {
              trigger: "#thirdSec",
              start: "top top",
              end: "+=1000",
              scrub: 1,
              pin: true,
              markers: true
            }
          })
          tl.to(".box", {xPercent: 350, duration: 1})
  }, [])
}

export default UseCooperation


