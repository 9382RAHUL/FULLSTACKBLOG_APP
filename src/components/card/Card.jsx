import React from 'react'
import styles from "@/components/card/card.module.css"
import Image from 'next/image'
import Link from 'next/link'
const Card = ({key,item}) => {
  return (
    <>
        <div className={styles.container} key={key}>
            <div className={styles.imageContainer}>
                <Image src="/p1.png" alt='f' fill className={styles.image}/>
            </div>
            <div className={styles.textContainer}>
            <div className={styles.detail}>
                {/* <span className={styles.date}>{item.createdAt.substring(0,10)}</span> */}
                <span className={styles.date}>11.02.2023</span>
                <span className={styles.category}>Culture</span>
            </div>
            <Link href="/" passHref>

            {/* <h1>{item.title}</h1> */}
            <h1>Lorem ipsum dolor sit amet consectetur.</h1>
            </Link>
            <p className={styles.desc}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis magni, est aliquam officia ducimus nihil beatae, doloremque animi, vel molestias doloribus ipsum exercitationem sit eaque? Perferendis at cumque enim rem.</p>
            <Link href='/'>Read more</Link>
            </div>
        </div>
    </>
  )
}

export default Card