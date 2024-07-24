'use client'
import React, { useEffect } from "react";
import { motion, useAnimate } from "framer-motion";
const RotatingImg = ({ani}) => {
    const [scope , animate] = useAnimate()
    useEffect(()=>{
        animate(scope.current,{scale:ani},{duration:.5})
    },[ani,scope,animate])
    return (
        <>
            <motion.div
            ref={scope}
                className="absolute z-[-1] w-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
               
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