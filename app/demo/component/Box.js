'use client'
import { motion } from "framer-motion"
import { useState } from "react";
const variants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 }
};

const Box = () => {
    const [position, setPostion] = useState({ x: 0, y: 0 })
    const handleDrag = (event, info) => {
        setPostion(
            {
                x: position.x - info.delta.x,
                y: position.y - info.delta.y,
            }
        )
    }
    return (
        <>
        <p>drag element in apposit</p>
            <motion.div drag
                onDrag={handleDrag}
                dragConstraints={{top:-50,left:-50,right:50,bottom:50}}
                dragElastic={0.7}
                style={{
                    backgroundColor: 'red',
                    height: '100px',
                    width: '100px',
                    margin: 'auto',
                    borderRadius: '100%',
                }}
                animate={{ x: position.x, y: position.y }}
            > drag me</motion.div>
            <p>box animate</p>
            <motion.div
                initial={{ opacity: 0, scale: 1, translateX: 0, rotateX: 0 }}
                animate={{ opacity: 1, scale: .5, translateX: 200, rotate: 90 }}
                transition={{
                    duration: 1, times: [0, 0.3, 0.6, 1]
                }}
                style={{
                    width: '100px', height: '100px', backgroundColor: 'blue'
                }}>

            </motion.div>
            <p>box animate with variant</p>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={{ duration: 1 }}
                style={{ width: 100, height: 100, backgroundColor: 'blue', margin: 'auto' }}
            />
            <p>while tap</p>
            <motion.div
                whileTap={
                    {
                        borderRadius: '5px',
                        border: '3px solid green'
                    }
                }
                style={{
                    padding: '12px 15px',
                    borderRadius: 0,
                    border: '1px solid black',
                    width: '100px',
                    margin: 'auto'
                }}>
                <p>Tap on me</p>
            </motion.div>
            <p>while hover</p>
            <motion.div
                whileHover={
                    {
                        borderRadius: '5px',
                        border: '3px solid green',
                        backgroundColor: 'black',
                        color: 'white'
                    }
                }
                style={{
                    padding: '12px 15px',
                    borderRadius: 0,
                    border: '1px solid black',
                    width: '100px',
                    margin: 'auto'
                }}>
                <p>hover me</p>

            </motion.div>
            <p>drag the element</p>
            <motion.div
                drag='x'
                dragElastic={0.5}
                dragConstraints={{ top: -50, left: -50, right: 50, bottom: 50 }}
                style={{ width: 100, height: 100, backgroundColor: 'blue', margin: 'auto' }}
            />
            
        </>
    )
}
export default Box;