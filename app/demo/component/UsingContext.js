'use client'
import React, { useContext } from "react";
import ThemeContext from "./ContextUse";
const UsingContext =()=>{
    const {theme ,handleTheme}=useContext(ThemeContext)
    return (
        <>
        <h2> theme:{theme}</h2>
        <button role="button" onClick={handleTheme}>
          toggle theme
        </button>
        </>
    )
}

export default UsingContext;