import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.5,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

const AdvanceMotion = () => {
    return (
        <>
            <h1 style={{
                textAlign: "center"
            }}>hello from advance framer</h1>
            <motion.div
                animate={{
                    scale: [1, 1.5, 1.2, 1.5, 1],
                    rotate: [0, 90, 180, 270, 360],
                    borderRadius: ["20%", "50%", "50%", "20%", "20%"],
                }}
                transition={{
                    duration: 2,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.5, 0.8, 1],
                    repeat: Infinity,
                    repeatDelay: 1,
                }}
                style={{
                    width: 100,
                    height: 100,
                    backgroundColor: "blue",
                }}
            />

            <motion.div
                animate={{ rotateX: 360, rotateY: 360 }}
                transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
                style={{
                    width: 100,
                    height: 100,
                    backgroundColor: "green",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <p style={{ color: "white" }}>3D</p>
            </motion.div>
            
            <svg width="600" height="200" viewBox="0 0 600 200">
                <motion.path
                    d="M50,50 C150,200 350,0 550,150"
                    fill="transparent"
                    stroke="red"
                    strokeWidth="3"
                    animate={{ pathLength: [0, 1] }}
                    transition={{ duration: 3, repeat: Infinity, repeatType: "mirror" }}
                />
            </svg>
            <motion.div
                className="container"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                style={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    height: "200px",
                }}
            >
                <motion.div
                    className="item"
                    variants={itemVariants}
                    style={{ width: 50, height: 50, backgroundColor: "blue" }}
                />
                <motion.div
                    className="item"
                    variants={itemVariants}
                    style={{ width: 50, height: 50, backgroundColor: "red" }}
                />
                <motion.div
                    className="item"
                    variants={itemVariants}
                    style={{ width: 50, height: 50, backgroundColor: "green" }}
                />
            </motion.div>
            <motion.div
                drag
                dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
                dragElastic={0.5}
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.1 }}
                style={{
                    width: 100,
                    height: 100,
                    backgroundColor: "purple",
                    borderRadius: "50%",
                }}
            />
        </>
    );
}
export default AdvanceMotion;