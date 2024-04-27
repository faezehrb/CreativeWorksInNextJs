import Link from 'next/link'
import React from 'react'
import { gsap } from 'gsap'
import ScrollToPlugin from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollToPlugin)

const handleSmoothScroll = (target: any) => {
    gsap.to(window, { duration: 0.5, scrollTo: { y: `#${target}`, offsetY: 0 } })
  };
  
  const SecNav = () => {
    return (
      <div className='fixed bottom-0 z-50 w-screen grid place-items-center justify-center items-center'>
        <ul className='backdrop-blur-2xl rounded-full mb-7 flex justify-center'>
          <li className='text-white text-center pl-10 pr-10 pt-5 pb-5 text-lg md:pl-1 md:pr-1 md:pt-0 md:pb-0 cursor-pointer md:text-xs' onClick={() => handleSmoothScroll('firstSec')}>
            Home
          </li>
          <li className='text-white text-center pl-10 pr-10 pt-5 pb-5 text-lg md:pl-1 md:pr-1 md:pt-0 md:pb-0 cursor-pointer md:text-xs' onClick={() => handleSmoothScroll('secondSec')}>
            ABOUT ME
          </li>
          <li className='text-white text-center pl-10 pr-10 pt-5 pb-5 text-lg md:pl-1 md:pr-1 md:pt-0 md:pb-0 cursor-pointer md:text-xs' onClick={() => handleSmoothScroll('thirdSec')}>
            CARRER
          </li>
          <li className='text-white text-center pl-10 pr-10 pt-5 pb-5 text-lg md:pl-1 md:pr-1 md:pt-0 md:pb-0 cursor-pointer md:text-xs' onClick={() => handleSmoothScroll('forthSec')}>
            SKILLS
          </li>
          <li className='text-white text-center pl-10 pr-10 pt-5 pb-5 text-lg md:pl-1 md:pr-1 md:pt-0 md:pb-0 cursor-pointer md:text-xs' onClick={() => handleSmoothScroll('fifthSec')}>
            CONTACT ME
          </li>
        </ul>
      </div>
    )
  }
  
  export default SecNav
  