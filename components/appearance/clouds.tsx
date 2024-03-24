
'use client'

import { useState, useEffect } from 'react'
import gsap from 'gsap'
import Cloud1 from '../svg/cloud1'
import Cloud2 from '../svg/cloud2'
import Cloud3 from '../svg/cloud3'
import Cloud4 from '../svg/cloud4'

interface CloudProps {
  left: number
  top: number
}

const Clouds: React.FC<CloudProps> = ({ left, top }) => {
  useEffect(() => {
    gsap.fromTo('.cloud-container', { opacity: 0 }, { opacity: 1, duration: 1 })
    gsap.fromTo('.cloud-container', { x: -50, y: 50, rotation: -10 }, { x: 50, y: -50, rotation: 10, duration: 1, repeat: -1, yoyo: true, ease: 'power1.inOut' })
  }, [])

  return (
    <div className="cloud-container absolute z-50" style={{ left: `${left}px`, top: `${top}px`, opacity: 0 }}>
      <Cloud1 />
      <Cloud2 />
      <Cloud3 />
      <Cloud4 />
    </div>
  )
}

const CloudContainer: React.FC = () => {
  const [clouds, setClouds] = useState<CloudProps[]>([]);

  useEffect(() => {
    const generateClouds = () => {
      const newClouds: CloudProps[] = [];
      for (let i = 0; i < 4; i++) {
        newClouds.push({
          left: typeof window !== 'undefined' ? Math.random() * window.innerWidth + 200.6543 : 0,
          top: Math.random() * window.innerHeight * 2.756,
        })
      }
      setClouds(newClouds)
    }

    generateClouds()
  }, [])

  return (
    <div className="clouds-container absolute z-0 top-0 blur-[2px] left-0 w-full h-full">
      {clouds.map((cloud, index) => (
        <Clouds key={index} left={cloud.left} top={cloud.top} />
      ))}
    </div>
  )
}

export default CloudContainer
