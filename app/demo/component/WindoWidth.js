
'use client'
import React, { useEffect, useState } from "react";

const WindowWidth = () => {
    const [WindowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
    })
    return (
        <h1> window Current width : {WindowWidth}</h1>
    )
}
export default WindowWidth;