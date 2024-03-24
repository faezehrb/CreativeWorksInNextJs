
'use client'

import { useAppContext } from "@/components/context";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin"
import { useIsomorphicLayoutEffect } from "usehooks-ts"

const useForthSoulRender = () =>{
    const { nightMode } = useAppContext()
    useIsomorphicLayoutEffect((): any => {
        if (nightMode) {
            gsap.registerPlugin(MotionPathPlugin)
        gsap.fromTo("#soul4",{
            width:90,
            opacity: 0,
            x:990
        }, {
            width:100,
            duration: 5,
            opacity: 0.4,
            once: true,
            repeat: -1,
            repeatDelay: 1,
            scrollTrigger: "#forthSec",
            x: 1000,
            y: 200,
            immediateRender: true,
            yoyo: false,
            ease: "power1.inOut"
            // motionPath:{
            //   alignOrigin: [0.5, 0.5],
            //   width:200,
            //   opacity: 0.2,
            //   repeat: 0
            // }
          })
        }
      }, [nightMode])
}

export default useForthSoulRender