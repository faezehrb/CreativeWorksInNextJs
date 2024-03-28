
'use client'
import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const CircularSkills = () => {
  useEffect(() => {
    const circularItems: any = gsap.utils.toArray('.circular-item')
    const totalItems = circularItems.length
    const radius = 100
    const centerX = 0
    const centerY = 0
    //const angleIncrement = (Math.PI * 1) / totalItems

    // let currentActive = 0;
    // gsap.set(circularItems[currentActive], { scale: 1 })

    ScrollTrigger.create({
      trigger: '#skillsCont',
      start: "top top%",
      end: "+=20% top",
      markers: {startColor: "white", endColor: "white"},

      onUpdate: (self) => {
        const scrollY = self.scroll();
        const rotations = 4 // Number of rotations
        const newAngleIncrement = (Math.PI * rotations) / totalItems; // Adjust rotation for four times

        circularItems.forEach((item: any, index: any) => {
          const newAngle = index * newAngleIncrement + scrollY
          const newX = centerX + radius * 0.8 * Math.cos(newAngle)
          const newY = centerY + radius * 0.8 * Math.sin(newAngle)

          gsap.to(item, { x: newX, y: newY })
        })
      },
    })
  }, [])

  return (
    <>
      <div className="scroll-trigger-element" id="skillsCont"> 
        <div className="circular-container relative">
          <div className="circular-item absolute w-12 h-12 bg-gray-200 border border-gray-400 rounded-full flex justify-center items-center">1</div>
          <div className="circular-item absolute w-12 h-12 bg-gray-200 border border-gray-400 rounded-full flex justify-center items-center">2</div>
          <div className="circular-item absolute w-12 h-12 bg-gray-200 border border-gray-400 rounded-full flex justify-center items-center">3</div>
          <div className="circular-item absolute w-12 h-12 bg-gray-200 border border-gray-400 rounded-full flex justify-center items-center">4</div>
          <div className="circular-item absolute w-12 h-12 bg-gray-200 border border-gray-400 rounded-full flex justify-center items-center">5</div>
        </div>
     </div>
    </>
  )
}

export default CircularSkills
