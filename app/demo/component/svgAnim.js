'use client'
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// Path data for the letter "S" (replace with your own path data if needed)
const pathData = "M10 80 Q 95 10 180 80 T 360 80";

const DotAlongPath = () => {
  const pathRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    if (pathRef.current) {
      const pathLength = pathRef.current.getTotalLength();

      // Animate dot along the path
      const animateDot = () => {
        let progress = 0;
        const animate = () => {
          progress = (progress + 1) % pathLength;
          const point = pathRef.current.getPointAtLength(progress);
          if (dotRef.current) {
            dotRef.current.setAttribute("cx", point.x);
            dotRef.current.setAttribute("cy", point.y);
          }
          requestAnimationFrame(animate);
        };
        animate();
      };

      animateDot();
    }
  }, []);

  return (
    <svg width="500" height="200" viewBox="0 0 500 200">
      <path
        d={pathData}
        stroke="black"
        strokeWidth="2"
        fill="none"
        ref={pathRef}
      />
      <circle
        r="5"
        fill="red"
        ref={dotRef}
      />
    </svg>
  );
};

export default DotAlongPath;
