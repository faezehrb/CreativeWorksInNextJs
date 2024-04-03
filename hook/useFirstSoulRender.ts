
'use client'

import { useAppContext } from "@/components/context";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { useIsomorphicLayoutEffect } from "usehooks-ts";

const useFirstSoulRender = () => {
    const { nightMode } = useAppContext()

  useIsomorphicLayoutEffect(() => {
    if (nightMode) {
        gsap.registerPlugin(MotionPathPlugin)
    
        const tl = gsap.fromTo(
        "#soul1",
        {
            duration: 1,
            right: -1000
        },
        {
            width: 150,
            duration: 10,
            scrollTrigger: "#firstSec",
            repeat: 0,
            opacity: 0,
            once: true,
            repeatDelay: 0,
            immediateRender: true,
            yoyo: true,
            ease: "power1.inOut",
            onComplete: () => {
            tl.restart()
            },
            motionPath: {
            path: "#path1",
            align: "#path1"
            }
        }
        )
    }
  }, [nightMode])
}

export default useFirstSoulRender;
