'use client'
import React, { useState, useEffect } from "react";
import GrainEffect from "./particale";
import AnimatedArrow from "./arrow";
import RotatingImg from "./rotateImg";
import SecTwo from "./secTwo";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const [windowWidth, setWindowWidth] = useState(0);
  const [scale, setScale] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
    }

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const x = useTransform(scrollYProgress, [0, 1], [0, -windowWidth - 500]);

  const handleElemAnimation = () => {
    setScale(scale + 1);
  };

  return (
    <>
      <div
        className="h-[300dvh] PrimeShade relative overflow-hidden"
      >
        {/* <GrainEffect/> */}
        <motion.div
        
        style={{
          x
        }} className="container mx-auto pt-14 fixed top-0 left-20 z-10" onClick={handleElemAnimation}>
          <RotatingImg ani={scale} />
          <div className="flex text-5xl absolute"> <p>Hey ! 👋 </p><p className="">I AM</p></div>
          <p className="primaryF4 text-[16vw]"><span className="primaryF2">G</span>raphic</p>
          <p className="primaryF4 text-[16vw] -mt-12"><span className="primaryF2">D</span>esigner</p>
          <div className="m-auto">
            <div>
              <p className="text-xs primaryF4 text-center">Scroll</p>
            </div>
            <div className=" w-9 h-12  m-auto">
              <AnimatedArrow />
            </div>
          </div>
        </motion.div>
      </div>
      <SecTwo />
    </>
  );
};

export default Hero;
