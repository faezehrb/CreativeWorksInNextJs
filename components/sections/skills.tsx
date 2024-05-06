
'use client'
import { useEffect } from "react";
import ForthSoulSVG from "../svg/forthSoulSVG"
import Image from 'next/image'
import { gsap } from "gsap";

const Skills = () => {
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
      <div className="container mx-auto px-52 lg:px-20 md:px-10 content-center min-h-screen bokeh relative">
            <div className="grid grid-cols-6 gap-16 lg:grid-cols-4 lg:gap-8 md:grid-cols-3 md:gap-4 backdrop-blur-md p-10 justify-items-center foreground-layer z-3 transition-opacity durati">
                  <div className="w-22 h-22 rounded-full]">
                     <Image
                        src="/img/logo/github.png"
                        width={100}
                        height={100}
                        alt="Picture of the author"
                     
                     />
                  </div>
                  <div className="w-22 h-22 rounded-full]">
                     <Image
                           src="/img/logo/wordpress.png"
                           width={100}
                           height={100}
                           alt="Picture of the author"
                        
                        />
                  </div>
                  <div className="w-22 h-22 rounded-full">
                     <Image
                        src="/img/logo/next.png"
                        width={95}
                        height={95}
                        alt="Picture of the author"
                     
                     />
                  </div>
                  <div className="w-22 h-22 rounded-full]">
                     <Image
                           src="/img/logo/html.png"
                           width={100}
                           height={100}
                           alt="Picture of the author"
                        
                        />
                  </div>
                  <div className="w-22 h-22 rounded-full]">
                     <Image
                           src="/img/logo/jquery.png"
                           width={100}
                           height={100}
                           alt="Picture of the author"
                        
                        />
                  </div>
                  <div className="w-22 h-22 rounded-full">
                  <Image
                        src="/img/logo/js.png"
                        width={100}
                        height={100}
                        alt="Picture of the author"
                     
                     />
                  </div>
                     <div className="w-22 h-22 rounded-full">
                     <Image
                           src="/img/logo/react.png"
                           width={100}
                           height={100}
                           alt="Picture of the author"
                        
                        />
                  </div>
                  <div className="w-22 h-22 rounded-full]">
                     <Image
                           src="/img/logo/tailwind.png"
                           width={100}
                           height={100}
                           alt="Picture of the author"
                        
                        />
                  </div>
                  <div className="w-22 h-22 rounded-full">
                     <Image
                           src="/img/logo/ts.png"
                           width={100}
                           height={100}
                           alt="Picture of the author"
                        
                        />
                  </div>
                  <div className="w-22 h-22 rounded-full">
                  <Image
                        src="/img/logo/css.png"
                        width={100}
                        height={100}
                        alt="Picture of the author"
                     
                     />
                  </div>
                  <div className="w-22 h-22 rounded-full]">
                     <Image
                           src="/img/logo/bootstrap.png"
                           width={100}
                           height={100}
                           alt="Picture of the author"
                        
                        />
                  </div>
                  <div className="w-22 h-22 rounded-full]">
                     <Image
                           src="/img/logo/redux.png"
                           width={100}
                           height={100}
                           alt="Picture of the author"
                        
                        />
                  </div>
            </div>
      </div>
      <ForthSoulSVG />
    </>    
  )
}
export default Skills
