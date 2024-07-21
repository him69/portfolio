'use client'
import React from "react";
import { motion } from "framer-motion";
const RotatingImg = () => {
    return (
        <>
            <motion.div
                className="absolute z-0 w-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mix-blend-luminosity"
                // animate={{
                //     rotate: [0, 360],
                //     scale: [.5, .5, .5],
                //     x: ['-50%', '-50%'],
                //     y: ['-50%', '-50%'],
                // }}
                // transition={{
                //     repeat: Infinity,
                //     duration: 20,
                //     ease: 'linear',
                // }}
            >
                <img
                    src="http://localhost:3000/images/star.png"
                    alt=""
                    style={{ width: '100%', height: 'auto' }}
                />
            </motion.div>
        </>
    )
}
export default RotatingImg;