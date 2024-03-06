"use client";

import React, { useContext, useState } from "react";
import styles from "@/components/authlinks/authlinks.module.css";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
// import { ThemeContext } from "@/context/ThemeContext";
const Authlinks = () => {
  // const {theme}=useContext(ThemeContext);
  const [open, setopen] = useState(false);
  const {status} = useSession();
  return (
    <>
      {status === "unauthenticated" ? (
        <Link href="/login">Login</Link>
      ) : (
        <>
          <Link href="/write" className={styles.link}>Write</Link>
          <span className={styles.link} onClick={()=>signOut()}>Logout</span>
        </>
      )}

      <div className={styles.burger} onClick={() => setopen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/">Homepage</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          {status === "notauthenticated" ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href="/write">Write</Link>
              <span className={styles.link}>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Authlinks;
