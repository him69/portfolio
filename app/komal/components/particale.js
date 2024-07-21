'use client'
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

const GrainEffect = ({ opacity = 0.5 }) => {

    const keyframesX = ["0%", "10%", "-10%", "5%", "-5%"];
    const keyframesY = ["0%", "10%", "-10%", "5%", "-5%"];
    const keyframesZ = ["0%", "0", "-0", "0", "0"];

    return (
        <motion.div
        className="noise"
        animate={{
          x: keyframesX, // Complex horizontal movement
          y: keyframesY,  // Complex vertical movement
          Z: keyframesZ  // Complex vertical movement
        }}
        transition={{
          duration: 5,       // Faster animation
          ease: 'linear',    // Smooth continuous movement
          repeat: Infinity,  // Loop indefinitely
          repeatType: 'loop' // Loop type
        }}
      />
    );
  };
  
  

export default GrainEffect;
