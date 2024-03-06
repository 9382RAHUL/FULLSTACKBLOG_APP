import React from 'react'
import styles from "@/app/blog/blogpage.module.css"
import Cardlist from '@/components/cardlist/Cardlist'
import Menu from '@/components/menu/Menu'
const Blogpage = ({searchParams}) => {
  const page=parseInt(searchParams.page)||1;
  const {cat}=searchParams;
  return (
    <>
        <div className={styles.container}>
            <h1 className={styles.title}>{cat}</h1>
            <div className={styles.content}>
                <Cardlist page={page} cat={cat}/>
                <Menu/>
            </div>
        </div>
    </>
  )
}

export default Blogpage