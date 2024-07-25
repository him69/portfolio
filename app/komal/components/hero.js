'use client'
import React, { useState, useEffect } from "react";
import GrainEffect from "./particale";
import RotatingImg from "./rotateImg";
import SecTwo from "./secTwo";
import { motion, useScroll, useTransform } from "framer-motion";
import ArrowBox from "./arrowBox";

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
  const opacity = useTransform(scrollYProgress, [0, .9], [1, 0]);
  const arrowOpacity = useTransform(scrollYProgress, [0, .05], [1, 0]);

  const handleElemAnimation = () => {
    setScale(scale + .2);
  };

  return (
    <>
      <div
        className=" relative overflow-hidden"
      >
        {/* <GrainEffect/> */}
        <div className="relative">
          <motion.div

            style={{
              x, opacity
            }} className="container mx-auto pt-14  fixed top-0 left-20 z-10" onClick={handleElemAnimation}>

            <div className="flex text-5xl absolute"> <p>Hey ! 👋 </p><p className="">I AM</p></div>
            <p className="primaryF4 text-[16vw]"><span className="primaryF2">G</span>raphic</p>
            <p className="primaryF4 text-[16vw] -mt-12"><span className="primaryF2">D</span>esigner</p>
          </motion.div>
        </div>
        <motion.div
        style={{
          opacity:arrowOpacity,
        }}
        >
        <ArrowBox />
        </motion.div>
      </div>
      <SecTwo />
    </>
  );
};

export default Hero;
