
'use client'
import { useEffect, useState } from "react"
import ThirdSoulSVG from "../svg/thirdSoulSVG";
import Image from "next/image"
import { gsap } from "gsap"
import { useAppContext } from "../context"

interface Skills {
  src: string
}

const Skills = () => {
  const [skills, setSkills] = useState<Skills[]>([])
  const [skillsFetched, setSkillsFetched] = useState<boolean>(false)
  const { nightMode } = useAppContext();
  // useEffect(() => {
  //   const getSkills = async () => {
  //     try {
  //       const response = await fetch("http://localhost:8000/skills", {
  //         method: "GET",
  //         cache: "no-store",
  //       })
  //       const data: Skills[] = await response.json()
  //       setSkills(data)
  //       setSkillsFetched(true) // Set skillsFetched to true after skills data is fetched
  //     } catch (error) {
  //       console.error("Error fetching skills:", error)
  //     }
  //   }

  //   getSkills()
  // }, [])

  useEffect(() => {
   

      const animations = [];

      for (let i = 0; i < 12; i++) {
        animations.push({
          x: Math.random() * 4 - 2,
          y: Math.random() * 4 - 2,
          rotation: Math.random() * 4 - 2,
        });
      }

      animations.forEach((animation, index) => {
        gsap.fromTo(
          `.foreground-layer > div:nth-child(${index + 1})`,
          { x: animation.x, y: animation.y, rotation: animation.rotation },
          {
            x: -animation.x,
            y: -animation.y,
            rotation: -animation.rotation,
            duration: 1,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
          }
        );
      });
    
  }, []) 
  return (
    <>
    <ThirdSoulSVG />
      <div className="container mx-auto px-32 lg:px-20 md:px-10 grid content-center min-h-screen bokeh relative">
        <div className="backdrop-blur-md z-20 rounded-full p-3 mb-10">
          <h2 className="text-center text-white text-4xl">
             Some of My Technical Skills
          </h2>
        </div>
        <div className="grid grid-cols-6 gap-16 lg:grid-cols-4 lg:gap-8 md:grid-cols-3 md:gap-4 backdrop-blur-md p-16 justify-items-center foreground-layer z-3 transition-opacity durati">
          {/* {skills.map((item, index) => (
            <div key={index} className="w-22 h-22 rounded-full">
              <Image
                src={item.src}
                width={100}
                height={100}
                alt={`Skill ${index + 1}`}
              />
            </div>
          ))} */}
                  <div className="w-22 h-22 rounded-full">
                     <Image
                        src="/img/logo/github.png"
                        width={95}
                        height={95}
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
                  <div className="w-22 h-22 rounded-full]">
                     <Image
                           src="/img/logo/figma.png"
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
                           src="/img/logo/redux.png"
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
        </div>
      </div>
      
    </>
  );
};

export default Skills;








// const [skills, setSkills] = useState<Skills[]>([])
// const [skillsFetched, setSkillsFetched] = useState<boolean>(false)

// useEffect(() => {
//   const getSkills = async () => {
//     try {
//       const response = await fetch("http://localhost:8000/skills", {
//         method: "GET",
//         cache: "no-store",
//       })
//       const data: Skills[] = await response.json()
//       setSkills(data)
//       setSkillsFetched(true) // Set skillsFetched to true after skills data is fetched
//     } catch (error) {
//       console.error("Error fetching skills:", error)
//     }
//   }

//   getSkills()
// }, [])

// useEffect(() => {
 
//   if (skillsFetched) {
//     const animations = [];

//     for (let i = 0; i < 12; i++) {
//       animations.push({
//         x: Math.random() * 4 - 2,
//         y: Math.random() * 4 - 2,
//         rotation: Math.random() * 4 - 2,
//       });
//     }

//     animations.forEach((animation, index) => {
//       gsap.fromTo(
//         `.foreground-layer > div:nth-child(${index + 1})`,
//         { x: animation.x, y: animation.y, rotation: animation.rotation },
//         {
//           x: -animation.x,
//           y: -animation.y,
//           rotation: -animation.rotation,
//           duration: 1,
//           repeat: -1,
//           yoyo: true,
//           ease: "power1.inOut",
//         }
//       );
//     });
//   }
// }, [skillsFetched]) 