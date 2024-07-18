'use client'
import React, { useEffect } from "react";


const Logger =()=>{
useEffect(()=>{
    console.log('Component Mounted')

    // clean up function
    return ()=>{
console.log('Component will unmount')
    }
},[]);

    return <h2>
        check console for result
    </h2>
}
export default Logger;