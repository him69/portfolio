import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ScrollSec = () => {
    const { scrollYProgress } = useScroll();
    const x = useTransform(scrollYProgress, [0, 1], [0, 500]);
    //   const opacity = useTransform(scrollYProgress, [0.3, 0.6], [1, 0]);

    return (
        <>    <div style={{ height: '300vh' }}>
            <motion.div
                style={{
                    x,
                    background: 'blue',
                    height: 100,
                    width: 100,
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                }}
            />

        </div>
            <div style={{ marginTop: '100vh', textAlign: 'center' }}>
                <h1>Next Section</h1>
            </div>
        </>

    );
};

export default ScrollSec;
