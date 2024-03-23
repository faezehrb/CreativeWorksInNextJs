
import { useAppContext } from "@/components/context";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin"
import { useIsomorphicLayoutEffect } from "usehooks-ts"

const useThirdSoulRender = () =>{
  const { nightMode } = useAppContext()

  useIsomorphicLayoutEffect(() => {
    if (nightMode) {
      gsap.registerPlugin(MotionPathPlugin)
       const tl = gsap.fromTo("#soul3", {
            duration: 22,
        },{
            width: 110,
            scrollTrigger: "#thirdSec",
            duration: 15, 
            repeat: 0,
            opacity: 0,
            onComplete: () => {
                tl.restart()
                
             },
            repeatDelay: 0,
            yoyo: true,
            ease: "power1.inOut",
            motionPath:{
              path: "#path3",
              align: "#path3",
              alignOrigin: [0.5, 0.5]
            }
          })
        }
      }, [nightMode])
}

export default useThirdSoulRender