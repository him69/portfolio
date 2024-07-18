'use client'
import React, { useEffect, useState } from "react";


const Timer = ({ initialSec }) => {
    const [sec, setSec] = useState(initialSec);
    useEffect(() => {
        if (sec > 0) {
            const timer = setTimeout(() => setSec(sec - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [sec])
    return (
        <div>
            <h2>time Remaining :{sec}</h2>
        </div>
    )
}
export default Timer;