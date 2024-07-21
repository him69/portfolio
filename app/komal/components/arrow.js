// AnimatedArrow.jsx
'use client'
import React from 'react';
import { motion } from 'framer-motion';

const AnimatedArrow = () => {
    return (
        <motion.svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100" preserveAspectRatio="xMidYMid slice" style={{
            width: '100%',
            height: '100%',
            transform: 'translate3d(0px, 0px, 0px)'
        }}>
            <defs>
                <clipPath id="__lottie_element_40">
                    <rect width="100" height="100" x="0" y="0"></rect>
                </clipPath>
            </defs>
            <g clipPath="url(#__lottie_element_40)">
                <motion.g
                    animate={{
                        transform: [
                            'matrix(0.97374,0,0,1,210.527,-329.4)',
                            'matrix(0.97374, 0, 0, 1, 210.527, -318.4)',
                            'matrix(0.97374,0,0,1,210.527,-329.4)',
                        ],
                        opacity: [1, 1, 0]
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        times: [0, 0.5, 1]
                    }} style={{ display: 'block' }}>
                    <g transform="matrix(0.9433799982070923,0,0,1,0,0)"><path strokeLinecap="round" strokeLinejoin="round" fillOpacity="0" stroke="rgb(0,0,0)" strokeOpacity="1" strokeWidth="4" d="M-185.6439971923828,367.8999938964844 C-185.6439971923828,367.8999938964844 -174.6909942626953,375.3999938964844 -174.6909942626953,375.3999938964844 C-174.6909942626953,375.3999938964844 -163.8560028076172,367.8999938964844 -163.8560028076172,367.8999938964844"></path></g>
                </motion.g>
                <motion.g
                    animate={{
                        transform: [
                            'matrix(0.9734,0,0,1,210.5270,-313.9321)',
                            'matrix(0.9734,0,0,1,210.5270,-304.932)',
                            'matrix(0.9734,0,0,1,210.5270,-313.9321)',
                        ],
                        opacity: [0, 1, 1]
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        times: [0, 0.5, 1]
                    }}
                    style={{ display: 'block' }}>
                    <motion.g
                        transform="matrix(0.9433799982070923,0,0,1,0,0)"><motion.path strokeLinecap="round" strokeLinejoin="round" fillOpacity="0" stroke="rgb(0,0,0)" strokeOpacity="1" strokeWidth="4" d="M-185.6439971923828,367.8999938964844 C-185.6439971923828,367.8999938964844 -174.6909942626953,375.3999938964844 -174.6909942626953,375.3999938964844 C-174.6909942626953,375.3999938964844 -163.8560028076172,367.8999938964844 -163.8560028076172,367.8999938964844">
                        </motion.path>
                    </motion.g>
                </motion.g>
            </g>
        </motion.svg>



    );
};

export default AnimatedArrow;
