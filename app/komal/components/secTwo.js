'use client'
import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

const SecTwo = () => {
  const ref =useRef(null);
  const isInView = useInView(ref, { once: true});

  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0.5, 0.7], [0.5, 2]);
  const y = useTransform(scrollYProgress, [.5, 1], ['-109%', '42%']);

  return (
    <div className={`h-[100vh] relative overflow-hidden ${isInView ? 'SecShade' : ''}`} ref={ref}>
      <motion.div
        className="absolute z-10 w-[500px] top-1/2 left-1/2 -translate-x-1/2"
        style={{ scale, y,x:'-50%',rotate:'39deg',zIndex:10 }}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1, scale: 2, y: '-34%' } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src="http://localhost:3000/images/star.png"
          alt=""
          style={{ width: '100%', height: 'auto' }}
        />
      </motion.div>
    </div>
  );
};

export default SecTwo;
