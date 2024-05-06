
import React from 'react'
import { gsap } from 'gsap'
import { useState, useEffect, useRef } from 'react';
import ScrollToPlugin from 'gsap/ScrollToPlugin'
import { useAppContext } from '../context';

gsap.registerPlugin(ScrollToPlugin)

const handleSmoothScroll = (target: number) => {
    gsap.to(window, { duration: 0.5, scrollTo: { y: `#${target}`, offsetY: 0 } })
  }
  
  const SecNav = () => {
    const [activeSection, setActiveSection] = useState('firstSec');

    useEffect(() => {
      const handleScroll = () => {
        const sections = document.querySelectorAll('section');
        const scrollPosition =  window.innerHeight / 2;
  
        sections.forEach((section) => {
          const { top, bottom } = section.getBoundingClientRect();
          const sectionId = section.id;
  
          if (scrollPosition >= top && scrollPosition < bottom) {
            setActiveSection(sectionId);
          }
        });
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    const handleSmoothScroll = (sectionId: string) => {
      const section: any = document.getElementById(sectionId);
      section.scrollIntoView({ behavior: 'smooth' });
    };
    const { nightMode } = useAppContext()
    return (
      <div className='fixed bottom-0 z-50 w-screen grid place-items-center justify-center items-center md:p-2'>
        <ul className='backdrop-blur-2xl rounded-full mb-7 flex justify-center'>
          <li className={`text-white transform transition-all text-center pl-7 pr-7 pt-3 pb-3 text-lg md:pl-2 md:pr-2 md:pt-1 md:pb-1 cursor-pointer ${nightMode ? "md:text-[0.65rem]" : "md:text-[0.75rem]"} ${activeSection === 'firstSec' ? 'bg-blue-500 rounded-full' : ''}`} onClick={() => handleSmoothScroll('firstSec')}>
            HOME
          </li>
          <li className={`text-white transform transition-all text-center pl-7 pr-7 pt-3 pb-3 text-lg md:pl-2 md:pr-2 md:pt-1 md:pb-1 cursor-pointer ${nightMode ? "md:text-[0.65rem]" : "md:text-[0.75rem]"} ${activeSection === 'secondSec' ? 'bg-blue-500 rounded-full' : ''}`} onClick={() => handleSmoothScroll('secondSec')}>
            ABOUT ME
          </li>
          <li className={`text-white transform transition-all text-center pl-7 pr-7 pt-3 pb-3 text-lg md:pl-2 md:pr-2 md:pt-1 md:pb-1 cursor-pointer ${nightMode ? "md:text-[0.65rem]" : "md:text-[0.75rem]"} ${activeSection === 'thirdSec' ? 'bg-blue-500 rounded-full' : ''}`} onClick={() => handleSmoothScroll('thirdSec')}>
            CARRER
          </li>
          <li className={`text-white transform transition-all text-center pl-7 pr-7 pt-3 pb-3 text-lg md:pl-2 md:pr-2 md:pt-1 md:pb-1 cursor-pointer ${nightMode ? "md:text-[0.65rem]" : "md:text-[0.75rem]"} ${activeSection === 'forthSec' ? 'bg-blue-500 rounded-full' : ''}`} onClick={() => handleSmoothScroll('forthSec')}>
            SKILLS
          </li>
          <li className={`text-white transform transition-all text-center pl-7 pr-7 pt-3 pb-3 text-lg md:pl-2 md:pr-2 md:pt-1 md:pb-1 cursor-pointer ${nightMode ? "md:text-[0.65rem]" : "md:text-[0.75rem]"} ${activeSection === 'fifthSec' ? 'bg-blue-500 rounded-full' : ''}`} onClick={() => handleSmoothScroll('fifthSec')}>
            CONTACT ME
          </li>
        </ul>
      </div>
    );
  }
  
  export default SecNav
  