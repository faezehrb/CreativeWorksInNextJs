
'use client'
import { useEffect } from "react";
import ForthSoulSVG from "../svg/forthSoulSVG"
import Image from 'next/image'
import { gsap } from "gsap";

const Forth = () => {
   useEffect(() => {
      const animations = [];
  
      for (let i = 0; i < 12; i++) {
        animations.push({
          x: Math.random() * 4 - 2, // Random number between -2 and 2
          y: Math.random() * 4 - 2, // Random number between -2 and 2
          rotation: Math.random() * 4 - 2, // Random number between -2 and 2
        });
      }
  
      animations.forEach((animation, index) => {
        gsap.fromTo(`.foreground-layer > div:nth-child(${index + 1})`, 
          { x: animation.x, y: animation.y, rotation: animation.rotation }, // Initial position and rotation
          { x: -animation.x, y: -animation.y, rotation: -animation.rotation, duration: 1, repeat: -1, yoyo: true, ease: 'power1.inOut' }
        );
      });
    }, [])
  return (
    <>
    <div className="container">
      <div className="">
        <div className="bokeh relative">
          <div className="foreground-layer absolute z-3 transition-opacity durati">
            <div className="absolute w-22 h-22 rounded-full top-[50vh] left-[5vw]">
                <Image
                  src="/img/logo/github.png"
                  width={100}
                  height={100}
                  alt="Picture of the author"
                 
               />
            </div>
            <div className="absolute w-20 h-20 rounded-full top-[26vh] left-[37vw]">
                <Image
                  src="/img/logo/github.png"
                  width={100}
                  height={100}
                  alt="Picture of the author"
                 
               />
            </div>
            <div className="absolute w-16 h-16 rounded-full top-[14vh] left-[56vw]">
            <Image
                  src="/img/logo/wordpress.png"
                  width={100}
                  height={100}
                  alt="Picture of the author"
                 
               />
            </div>
            <div className="absolute w-20 h-20 rounded-full top-[80vh] left-[10vw]">
            <Image
                  src="/img/logo/html.png"
                  width={100}
                  height={100}
                  alt="Picture of the author"
                 
               />
            </div>
            <div className="absolute w-32 h-32 rounded-full top-[77vh] left-[75vw]">
            <Image
                  src="/img/logo/jquery.png"
                  width={100}
                  height={100}
                  alt="Picture of the author"
                 
               />
            </div>
            <div className="absolute w-40 h-40 rounded-full top-[4vh] left-[75vw]">
            <Image
                  src="/img/logo/js.png"
                  width={100}
                  height={100}
                  alt="Picture of the author"
                 
               />
            </div>
            <div className="absolute w-32 h-32 rounded-full top-[5vh] left-[18vw]">
            <Image
                  src="/img/logo/react.png"
                  width={100}
                  height={100}
                  alt="Picture of the author"
                 
               />
            </div>
            <div className="absolute w-20 h-20 rounded-full top-[35vh] left-[58vw]">
            <Image
                  src="/img/logo/tailwind.png"
                  width={100}
                  height={100}
                  alt="Picture of the author"
                 
               />
            </div>
            <div className="absolute w-40 h-40 rounded-full top-[25vh] left-[5vw]">
            <Image
                  src="/img/logo/ts.png"
                  width={100}
                  height={100}
                  alt="Picture of the author"
                 
               />
            </div>
            <div className="absolute w-28 h-28 rounded-full top-[54vh] left-[24vw]">
            <Image
                  src="/img/logo/css.png"
                  width={100}
                  height={100}
                  alt="Picture of the author"
                 
               />
            </div>
            <div className="absolute w-24 h-24 rounded-full top-[41vh] left-[80vw]">
            <Image
                  src="/img/logo/bootstrap.png"
                  width={100}
                  height={100}
                  alt="Picture of the author"
                 
               />
            </div>
            <div className="absolute w-28 h-28 rounded-full top-[60vh] left-[42vw]">
            <Image
                  src="/img/logo/redux.png"
                  width={100}
                  height={100}
                  alt="Picture of the author"
                 
               />
            </div>
          </div>
        </div>
      </div>
    </div>

      <ForthSoulSVG />
    </>    
  )
}
export default Forth
