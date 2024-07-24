import React from 'react';
import { motion } from 'framer-motion';

const MorphingShapes = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <svg
        width="200"
        height="200"
        viewBox="0 0 100 100"
      >
        <motion.path
          fill="transparent"
          stroke="black"
          strokeWidth="2"
          initial={{ d: "M10 10 H 90 V 90 H 10 Z" }}
          animate={{ d: "M50 10 C 90 10, 90 90, 50 90 C 10 90, 10 10, 50 10" }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </svg>
    </div>
  );
};

export default MorphingShapes;
