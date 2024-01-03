import { useGSAP } from '@gsap/react';
import React, { useRef } from 'react';
import { gsap } from 'gsap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import { Fragment } from 'react';
// import './scroll/scroll';
import './App.css';
import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';
import { ScrollSmoother } from 'gsap-trial/ScrollSmoother';
import Soul1 from './souls/Soul1';
import Soul2 from './souls/Soul2';
import Soul3 from './souls/Soul3';
import Soul4 from './souls/Soul4';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {
  const main = useRef();
  const smoother = useRef();

  useGSAP(
    () => {
      smoother.current = ScrollSmoother.create({
        smooth: 4, 
        effects: true
      });
      ScrollTrigger.create({
        start: 'center center',
        markers: true
      });
    },
    { scope: main }
  );

  // useGSAP(
  //   () => {
  //     smoother.current = ScrollSmoother.create({
  //       smooth: 1, 
  //       effects: true
  //     });
  //     ScrollTrigger.create({
  //       trigger: '#soul2',
  //       start: 'center center',
  //       markers: true
  //     });
  //   },
  //   { scope: main }
  // );
  
  // useGSAP(
  //   () => {
  //     smoother.current = ScrollSmoother.create({
  //         smooth: 2, 
  //         effects: true
  //       });
  //       ScrollTrigger.create({
  //         trigger: '#soul3',
  //         start: 'center center',
  //         markers: true
  //       });
  //     },
  //     { scope: main }
  //   );
    
    // useGSAP(
    //   () => {
    //     smoother.current = ScrollSmoother.create({
    //       smooth: 2, 
    //       effects: true
    //     });
    //     ScrollTrigger.create({
    //       trigger: '#soul4',
    //       pin: true,
    //       start: 'center center',
    //       end: '+=200',
    //       markers: true
    //     });
    //   },
    //   { scope: main }
    // );
    return(
            <Container id='smooth-wrapper' ref={main} fluid>
                <div id='smooth-content'>
                    <Row className='soulSection' id='firstSec'>
                        <Col data-speed="1.5"><Soul1/></Col>
                    </Row>
                    <Row className='soulSection' id='thirdSec'>
                        <Col data-speed="1.5"><Soul3/></Col>
                    </Row>
                    <Row className='soulSection' id='secondSec'>
                        <Col data-speed="1.5"><Soul2/></Col>
                    </Row>
                    <Row className='soulSection' id='forthSec'>
                        <Col data-speed="1.5"><Soul4/></Col>
                    </Row>
                </div>
            </Container>
    );
}

export default App;
