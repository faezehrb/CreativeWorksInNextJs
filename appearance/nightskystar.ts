'use client';
import { useEffect } from 'react';

const NightSky: React.FC = () => {
  useEffect(() => {
    const createStars = () => {
      const stars: number = 50;
      const body: HTMLElement | null = document.querySelector('body');
      if (!body) return;
      for (let i = 0; i < stars; i++) {
        const star: HTMLDivElement = document.createElement('div');
        star.className = 'star';
        const duration: number = Math.random() * 10 + 5;
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

