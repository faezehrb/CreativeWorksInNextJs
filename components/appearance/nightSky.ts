
'use client'

import { useEffect } from "react"

const NightSky: React.FC = () => {
  useEffect(() => {
    const stars: number = 300
    const body: HTMLElement | null = document.querySelector("#smooth-wrapper")
    if (!body) return
    for (let i = 0; i < stars; i++) {
      const star: HTMLDivElement = document.createElement("div")
      star.className = "star"
      const duration: number = Math.random() * 5 + 5
      star.style.left = `${Math.random() * 100}vw`
      star.style.animation = `twinkle ${duration}s infinite, moveStar 60s infinite`
      star.style.top = `${Math.random() * 400}vh`
      body.appendChild(star)
    }

    return () => {
      const stars = document.querySelectorAll(".star")
      stars.forEach((star) => body.removeChild(star))
    }
  }, [])

  return null
}

export default NightSky
