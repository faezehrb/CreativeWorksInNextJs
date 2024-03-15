import React from 'react';
import Cloud1 from '../components/svg/cloud1';
import Cloud2 from '../components/svg/cloud2';
import Cloud3 from '../components/svg/cloud3';
import Cloud4 from '../components/svg/cloud4';

interface CloudProps {
  left: number;
  top: number;
}

const Clouds: React.FC<CloudProps> = ({ left, top }) => {
  const duration = Math.random() * 2 + 5;
  const motion = Math.floor(Math.random() * 4) + 1
  const cloudStyle = {
    left: `${left}px`,
    animation: `twinkle ${duration}s infinite, moveStar${motion} 60s infinite`,
    top: `${top}px`,
  }

  const clouds = [Cloud1, Cloud2, Cloud3, Cloud4];

  return (
    <div>
      {clouds.map((Cloud, i) => (
        <div key={i} className="cloud" style={cloudStyle}>
          <Cloud />
        </div>
      ))}
    </div>
  )
}

const CloudContainer: React.FC = () => {
  const centerX = window.innerWidth / 2;

  const clouds = Array.from({ length: 4 }).map(() => ({
    left: Math.random() * window.innerWidth, 
    top: Math.random() * window.innerHeight,
  }))

  return (
    <div className="absolute top-0 left-0 z-0 w-full h-full">
      {clouds.map((cloud, index) => (
        <Clouds key={index} left={cloud.left} top={cloud.top} />
      ))}
    </div>
  )
}

export default CloudContainer;
