'use client';
import React, { useState, useEffect } from 'react';

const PulsatingCircle = () => {
  const [intensity, setIntensity] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIntensity((prevIntensity) => (prevIntensity + 0.02) % 1);
    }, 50);

    return () => clearInterval(intervalId);
  }, []);

  const lightRed = [255, 0, 0];
  const darkRed = [139, 0, 0];

  const currentColor = lightRed.map((channel, index) => 
    Math.round(channel + (darkRed[index] - channel) * Math.sin(intensity * Math.PI))
  );

  return (
    <svg width="25" height="25" viewBox="0 0 100 100">
      <circle
        cx="40"
        cy="40"
        r="10"
        fill={`rgb(${currentColor.join(',')})`}
      >
        <animate
          attributeName="r"
          values="35;37;35"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
};

export default PulsatingCircle;