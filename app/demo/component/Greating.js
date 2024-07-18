'use client'
import React from "react";
// way one
// const Greating = (props) =>{
//     return <h1>Hello ,{props.n}</h1>
// }
// export default Greating;

// way two
const Greating = ({name}) =>{
    return <h1>Hello ,{name}</h1>
}
export default Greating;
// home work
// Create a few more components, such as a NavBar and Footer, and include them in your App.js.
// Experiment with passing props to components to make them more dynamic.