'use client'
import React, { useState } from "react";
import GrainEffect from "./particale";
import AnimatedArrow from "./arrow";
import RotatingImg from "./rotateImg";

const Hero = () => {
 const [scale ,setScale]= useState(0)
  const handleElemAnimation=()=>{
   setScale(scale + 1);
  }
  return (
    <>
      <div className="h-dvh PrimeShade relative overflow-hidden">
        {/* <GrainEffect/> */}
       
        <div className="container mx-auto pt-14 relative z-10" onClick={handleElemAnimation}>
        <RotatingImg ani={scale}/>
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
        </div>
      </div>
    </>
  )
}
export default Hero;