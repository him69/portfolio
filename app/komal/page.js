import React from "react";
import Hero from './components/hero'
import Nav from "./components/navBar";
import '@/styles/portfolio.css'
const page =()=>{
    return (
        <>
        <Nav/>
        <Hero/>
        {/* <p className="Balerga text-xl ">hello</p> */}
        </>
    )
}
export default page;