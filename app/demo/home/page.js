'use client'
import React from "react";
import AdvanceMotion from "../component/AdvanceMotion";
import DotAlongPath from "../component/svgAnim";
// import MorphingShapes from "../component/Morph";
// import SharedLayoutComponent from "../framerComponents/parent";
import LayoutAnimationExample from "../framerComponents/Mycomp";
import SharedLayoutAnimation from "../framerComponents/parent";


const Home = () => {
    return <>
        <p>Helo, from Home</p>
        <LayoutAnimationExample/>
        {/* <SharedLayoutComponent/> */}
        {/* <MorphingShapes/> */}
        <SharedLayoutAnimation/>
        <AdvanceMotion/>
        <DotAlongPath/>
        </>
}
export default Home;