// components/Clouds.tsx
import React from 'react';
import Cloud from './cloud';

const Clouds: React.FC = () => {
  
  return (
    <>
      <div className="absolute top-0 left-0 z-0 w-full h-full">
        {/* Render four instances of Cloud */}
        {[...Array(4)].map((_, index) => (
          <Cloud key={index} />
        ))}
      </div>
      <div className="absolute bottom-0 left-0 z-10 bg-gradient-to-t from-blue-400 to-transparent w-full h-20"></div>
    </>
  );
};

export default Clouds;
