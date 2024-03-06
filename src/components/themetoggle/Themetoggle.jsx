"use client";
import React, { useContext } from 'react'

// import Image from "next/image";
// import styles from "@/components/themetoggle/themetoggle.module.css";
// import { useContext } from "react";
// import { ThemeContext } from "@/context/ThemeContext";
import styles from "@/components/themetoggle/themetoggle.module.css"
import Image from 'next/image';
import  { ThemeContext } from '@/context/ThemeContext';
// import { ThemeContext } from '@/context/ThemeContextProvider';


const Themetoggle = () => {
const {theme,toggle}=useContext(ThemeContext);
// console.log(theme)
  return (
    <>
   <div className={styles.container} style={
        theme === "dark" ? { backgroundColor: "white" } : { backgroundColor: "#0f172a" }
      } onClick={toggle}>
    <Image src="/moon.jpg" alt='sun' width={14} height={14} className={styles.Image}/>
    <div className={styles.ball} style={
          theme === "dark"
            ? { left: 1, background: "#0f172a" }
            : { right: 1, background: "white" }
        }></div>
    <Image src="/sun.jpg"  alt='sun'width={14} height={14} className={styles.Image}/>
   </div>

        {/* <div
      className={styles.container}
      onClick={toggle}
      style={
        theme === "dark" ? { backgroundColor: "white" } : { backgroundColor: "#0f172a" }
      }
    >
      <Image src="/moon.png" alt="" width={14} height={14} />
      <div
        className={styles.ball}
        style={
          theme === "dark"
            ? { left: 1, background: "#0f172a" }
            : { right: 1, background: "white" }
        }
      ></div>
      <Image src="/sun.png" alt="" width={14} height={14} />
    </div> */}
    </>
  )
}

export default Themetoggle