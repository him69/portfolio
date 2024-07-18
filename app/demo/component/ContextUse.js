'use client'
import React, {  createContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider =({children})=>{
    const [theme ,setTheme]=useState('light');
    const handleTheme=()=>{
        setTheme(theme === 'light' ? 'dark' : 'light')
    }
    return (
        <>
        <ThemeContext.Provider value={{theme , handleTheme}}>
            {children}
        </ThemeContext.Provider>
        </>
    )
}

export default ThemeContext;