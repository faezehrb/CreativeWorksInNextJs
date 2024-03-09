import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin"
import { useIsomorphicLayoutEffect } from "usehooks-ts"

const useFirstSoulRender = () =>{
    useIsomorphicLayoutEffect((): any => {
    gsap.registerPlugin(MotionPathPlugin)
    const tl = gsap.fromTo("#soul1", {
        duration: 1,
    },{
        width: 150,
        duration: 20,
        scrollTrigger: "#firstSec",
        repeat: 0,
        opacity: 0,
        repeatDelay: 0,
        immediateRender: true,
        yoyo: true,
        ease: "power1.inOut",
        onComplete: () => {
            tl.restart()
        },
        motionPath: {
        path: "#path1",
        align: "#path1",
        }
      })
    }, [])
}

export default useFirstSoulRender