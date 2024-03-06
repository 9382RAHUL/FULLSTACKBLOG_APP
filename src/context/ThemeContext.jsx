"use client"
import React, { createContext, useEffect, useState } from 'react'
 export const ThemeContext=createContext();
// const getfromlocalstorage=()=>{
//     if(typeof window !== undefined){

//         const value = localStorage.getItem("theme");
//         return value|| "light";
//     }
// }
function getfromlocalstorage() {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'light';
    }
  }
const ThemeContextProvider = ({children}) => {
    const [theme,settheme]=useState(()=>{
        return getfromlocalstorage();
    });
    const toggle=()=>{
        settheme(theme==="light"?"dark" :"light");
    }
    useEffect(()=>{
        localStorage.setItem("theme",theme)
    },[theme])
  return (
    <>
<ThemeContext.Provider value={{theme,toggle}}>{children}</ThemeContext.Provider>
    </>
  )
}

export default ThemeContextProvider