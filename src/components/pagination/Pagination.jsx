"use client"

import React from 'react'
import styles from './pagination.module.css'
import { useRouter } from 'next/navigation'
const Pagination = ({page,hasprev,hasnext}) => {
  const router=useRouter();
  return (
   <>
    <div className={styles.container}>
      <button className={styles.button} disabled={hasprev} onClick={()=>router.push(`?page=${page-1}`)}>Previous</button>
      <button className={styles.button} disabled={hasnext} onClick={()=>router.push(`?page=${page+1}`)}>next</button>
    </div>
   </>
  )
}

export default Pagination