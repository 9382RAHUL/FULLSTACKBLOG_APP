import React from 'react'
import styles from "@/components/navbar/navbar.module.css"
import Image from "next/image";
import Link from "next/link";
import Authlinks from "../authlinks/Authlinks";
import Themetoggle from '../themetoggle/Themetoggle';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src="/facebook.png" width={30} height={27}  className={styles.image}/>
        <Image src="/instagram.png" className={styles.image} alt="instagram" width={26} height={26}  />
        <Image src="/tiktok.jpg" alt="tiktok" width={24} height={24} className={styles.image} />
        <Image src="/twitter.jpg" alt="youtube" width={24} height={24}  className={styles.image}/>
      </div>
      <div className={styles.logo}>Rahulblog</div>
      <div className={styles.links}>
       <Themetoggle/>
        <Link href="/" className={styles.link}>Homepage</Link>
        <Link href="/" className={styles.link}>Contact</Link>
        <Link href="/" className={styles.link}>About</Link>
        <Authlinks />
      </div>
    </div>
  )
}

export default Navbar