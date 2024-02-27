

//import { Fragment } from 'react';
// import './scroll/scroll';
import NightSky from '../appearance/nightskystar';
import First from '../sections/first';
import Second from '../sections/second';
import Third from '../sections/third';
import Forth from '../sections/forth';

function App() {

  return(
    <>
      <NightSky />
      <div>
        <section className='relative w-full h-full smooth-content' id='firstSec'>
          <First />
        </section>
        <section className='relative w-full h-full smooth-content' id='secondSec'>
          <Second />
        </section>
        <section className='relative w-full h-full smooth-content' id='thirdSec'>
          <Third />
        </section>
        <section className='relative w-full h-full smooth-content' id='forthSec'>
          <Forth />
        </section>
      </div>
    </>
  );
}
export default App;
