'use client'
import React, { useEffect, useState } from "react";

const Counter =()=>{
const [count ,setCount] = useState(0);
const [action , setAction]=useState('0')
const increment = ()=>{
    setCount(count + 1);
    setAction('Increment')
}
const decrement = ()=>{
    setCount(count - 1);
    setAction('Decrement')
}
// toggling the content
const [isOn , setIson]= useState(true);
const toggle =()=>{
    setIson(!isOn);
}
useEffect(()=>{
console.log(`${action} with count of : ${count}`)
},[increment,decrement])
return (
    <div>
        <h2>Count : {count}</h2>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <h2>{isOn ? 'ON':'OFF'}</h2>
        <button onClick={toggle}>Toggel</button>
    </div>
)
}

export default Counter;
