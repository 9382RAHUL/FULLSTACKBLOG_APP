"use client"
import { ThemeContext } from '@/context/ThemeContext'
import React, { useContext, useEffect, useState } from 'react'

const ThemeProvider = ({children}) => {
    const [mounted,setmounted]=useState(false);
    const {theme}=useContext(ThemeContext);
    useEffect(()=>{
        setmounted(true);
    },[])
    if(mounted){

        return (
          <div className={theme}>{children}</div>
        )
    }
}

export default ThemeProvider