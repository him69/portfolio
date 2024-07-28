'use client'
import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

const SecTwo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0.5, 0.7], [0.5, 2]);
  const y = useTransform(scrollYProgress, [.5, 1], ['-109%', '42%']);
  // 
  const textOpacity = useTransform(scrollYProgress, [0.8, .9], [0, 1]);
  const textYPosition = useTransform(scrollYProgress, [0.8, 1], [-100, 0]);
  const textBlur = useTransform(scrollYProgress, [0.9, 1], [10, 0]);
  const textVariant = {
    hidden: { opacity: 0, filter: '10px', y: 50 },
    visible: { opacity: 1, filter: '0', y: 0 },
  }

  return (
    <div className={`h-[100vh] relative px-28 overflow-hidden ${isInView ? 'SecShade' : ''}`} ref={ref}>
       <motion.div
        style={{
          opacity: textOpacity,
          filter: textBlur ? textBlur.toString(value => `blur(${value}px)`) : 'blur(10px)',
          x: textYPosition,
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <p className='primaryF2 text-8xl mt-8'>Yalam</p>
      </motion.div>
      <div className='mt-[70vh]'>
        <p className='primaryF2 text-end text-8xl'>Senni</p>
      </div>
      <motion.div
        className="absolute z-10 w-[500px] top-1/2 left-1/2 -translate-x-1/2"
        style={{ scale, y, x: '-50%', rotate: '39deg', zIndex: 10 }}
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
      <div class="absolute z-10 top-1/2 left-1/2 -translate-x-1/2" style={{
        zIndex: 6,
        transform: 'translate(-50%, -58%)'
      }}>
        <img style={{
          filter: 'drop-shadow(-7px 0px 1px white) drop-shadow(5px -1px 0px white)'
        }}
          src="http://localhost:3000/images/girl.png" />
      </div>

    </div>
  );
};

export default SecTwo;
