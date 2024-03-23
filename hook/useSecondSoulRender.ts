
import { useAppContext } from "@/components/context";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin"
import { useIsomorphicLayoutEffect } from "usehooks-ts"

const useSecondSoulRender = () =>{
  const { nightMode } = useAppContext()

  useIsomorphicLayoutEffect(() => {
    if (nightMode) {
      gsap.registerPlugin(MotionPathPlugin)
      const tl = gsap.fromTo("#soul2", {
          opacity: 0
      },{
          width: 150,
          duration: 10,
          scrollTrigger: "#secondSec",
          opacity: 0.7,
          repeat: 0,
          y: -2000,
          repeatDelay: 0,
          yoyo: true,
          ease: "power1.inOut",
          onComplete: () => {
            tl.restart()
          },
          motionPath:{
            path: "#path2",
            align: "#path2",
            start: 1,
            end: 0,
            alignOrigin: [0, 1]
          }
        })
    }
}, [nightMode])
}

export default useSecondSoulRender