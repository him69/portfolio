'use client'
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ScrollTriggeredAnimation = () => {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0,-1000]);

  return (
    <div style={{ height: '200vh' }}>
      <motion.div
        style={{
          x,
          background: 'blue',
          height: 100,
          width: 100,
          margin: '0 auto',
          marginTop: '50vh',
        }}
      />
    </div>
  );
};

export default ScrollTriggeredAnimation;

