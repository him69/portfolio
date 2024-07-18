
'use client'
import React, { useEffect, useState } from "react";

const SaveVal = ()=>{
    const [val , setVal] = useState('');
    const handleVal=(e)=>{
            setVal(e.target.value)
    }
    useEffect(()=>{
        localStorage.setItem('inputValue',val)
    },[val])
    return (
        <>
        <h2>setting up the input value to localstorge</h2>
        <input type="text" value={val} onChange={handleVal}/>
        </>
    )
}
export default SaveVal;