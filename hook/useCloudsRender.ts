import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin"
import { useIsomorphicLayoutEffect } from "usehooks-ts"

const useCloudsRender = () =>{
    useIsomorphicLayoutEffect((): any => {
        gsap.registerPlugin(MotionPathPlugin)
        const tl = gsap.fromTo("#cloud", {
            x:1100,
            y: 200,
            duration: 10,
            width: 150,
        },{
            width: 150,
            duration: 10,
            repeat: 10,
            x: 900,
            y: 200,
            immediateRender: true,
            yoyo: false,
            ease: "power1.inOut"
        })
    }, [])
}

export default useCloudsRender