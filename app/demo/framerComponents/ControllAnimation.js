'use client'
import React, { useEffect,useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const AnimationControlExample = () => {
    const controls = useAnimation();
  
    useEffect(() => {
      controls.start({
        x: 100,
        transition: { duration: 2 },
      });
    }, [controls]);
  
    const handleClick = () => {
      controls.start({
        scale: [1, 1.5, 1],
        transition: { duration: 0.5 },
      });
    };
  
    return (
      <div>
        <motion.div
          animate={controls}
          style={{
            background: 'blue',
            height: 100,
            width: 100,
            margin: '0 auto',
          }}
        />
        <button onClick={handleClick}>Click Me</button>
        <SequentialAnimationExample/>
        <ConditionalAnimationExample/>
      </div>
    );
  };
  
  export default AnimationControlExample;
  const SequentialAnimationExample = () => {
    const controls = useAnimation();
  
    const handleSequence = async () => {
      await controls.start({ x: 100, transition: { duration: 1 } });
      await controls.start({ y: 100, transition: { duration: 1 } });
      await controls.start({ scale: 1.5, transition: { duration: 1 } });
    };
  
    return (
      <div>
        <motion.div
          animate={controls}
          style={{
            background: 'blue',
            height: 100,
            width: 100,
            margin: '0 auto',
          }}
        />
        <button onClick={handleSequence}>Start Sequence</button>
      </div>
    );
  };
  
  const ConditionalAnimationExample = () => {
    const controls = useAnimation();
    const [isAnimating, setIsAnimating] = useState(false);
  
    useEffect(() => {
      if (isAnimating) {
        controls.start({ rotate: 360, transition: { duration: 2 } });
      } else {
        controls.start({ rotate: 0, transition: { duration: 2 } });
      }
    }, [isAnimating, controls]);
  
    return (
      <div>
        <motion.div
          animate={controls}
          style={{
            background: 'blue',
            height: 100,
            width: 100,
            margin: '0 auto',
          }}
        />
        <button onClick={() => setIsAnimating(!isAnimating)}>
          Toggle Animation
        </button>
      </div>
    );
  };
  
  