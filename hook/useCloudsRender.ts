import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin"
import { useIsomorphicLayoutEffect } from "usehooks-ts"

const useCloudsRender = () =>{
    useIsomorphicLayoutEffect((): any => {

        gsap.registerPlugin(MotionPathPlugin)
        const tl = gsap.fromTo("#cloud", {
            x:1200,
            y: 200,
            duration: 20,
            width: 150,
        },{
            width: 150,
            duration: 20,
            scrollTrigger: "#firstSec",
            repeat: 10,
            x: -200,
            y: 200,
            immediateRender: true,
            yoyo: false,
            ease: "power1.inOut"
        })
    }, [])
}

export default useCloudsRender