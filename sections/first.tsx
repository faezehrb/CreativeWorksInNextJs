'use client'

import Soulfirstsection from '../components/soulfirstsection';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';
import { ScrollSmoother } from 'gsap-trial/ScrollSmoother';
import { useGSAP } from '@gsap/react';
import React, { useRef } from 'react';


gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const First = () => {
 const main: any = useRef(); 
 const smoother: any = useRef();


  useGSAP(
    () => {
      smoother.current = ScrollSmoother.create({
        smooth: 0.5, 
        effects: true
      });
      ScrollTrigger.create({
        start: 'top bottom',
        markers: true
      });
    },
    { scope: main }
  );
  return (
    <div id='smooth-wrapper'  ref={main}> 
      <div id='smooth-content'><Soulfirstsection /></div>
        <div className=''>
            <h1 className='absolute left-[50%] top-[50%] z-50 text-4xl'>First</h1>
        </div>
    </div>
  )
}

export default First
