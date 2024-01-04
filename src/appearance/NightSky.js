
import { useEffect } from 'react';
import './NightSky.css';

const NightSky = () => {
  useEffect(() => {
    const createStars = () => {
      const stars = 50; 
      const body = document.querySelector('body');
      for (let i = 0; i < stars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        //const xy = Math.random() * 100;
        const duration = Math.random() * 10 + 5; 
        star.style.left = `${Math.random() * 100}vw`;
        star.style.animation = `twinkle ${duration}s infinite, moveStar 60s infinite`; 
        star.style.top = `${Math.random() * 400}vh`; 
        body.appendChild(star);
      }
    };

    createStars();
  }, []);

  return null;
};

export default NightSky;
