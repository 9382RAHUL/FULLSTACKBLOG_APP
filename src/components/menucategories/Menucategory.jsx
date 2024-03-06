import React from 'react'
import Link from "next/link";
import Image from "next/image";
import styles from "@/components/menucategories/menucategories.module.css"
const Menucategory = () => {
  return (
<>
<div className={styles.categoryList}>
        <Link href="/blog" className={`${styles.categoryItem} ${styles.style}`}>Style</Link>
        <Link href="/blog" className={`${styles.categoryItem} ${styles.fashion}`}>fashion</Link>
        <Link href="/blog" className={`${styles.categoryItem} ${styles.food}`}>food</Link>
        <Link href="/blog" className={`${styles.categoryItem} ${styles.travel}`}>travel</Link>
        <Link href="/blog" className={`${styles.categoryItem} ${styles.culture}`}>culture</Link>
        <Link href="/blog" className={`${styles.categoryItem} ${styles.coding}`}>coding</Link>
      </div>
</>
  )
}

export default Menucategory