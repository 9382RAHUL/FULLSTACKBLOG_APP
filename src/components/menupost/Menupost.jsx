import React from 'react'
import styles from "@/components/menupost/menupost.module.css"
import Link from "next/link";
import Image from "next/image";
const Menupost = ({withImage}) => {
  return (
   <>
     {/* <div className={styles.items}>
          <Link href="/" className={styles.item}>
          { withimage && (
            <div className={styles.imageContainer}>
              <Image className={styles.image} src="/p1.png" fill alt="tr" />
            </div>
           )}
            <div className={styles.textContainer}>
              <span className={`${styles.category} ${styles.travel}`}>
                Travel
              </span>
              <h3 className={styles.postTitle}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
              </h3>
              <div className={styles.detail}>
                <span className={styles.username}>rahul modak</span>
                <span className={styles.date}>10.02.3230</span>
              </div>
            </div>
          </Link>
          <Link href="/" className={styles.item}>
          { withimage && (
            <div className={styles.imageContainer}>
              <Image className={styles.image} src="/p1.png" fill alt="tr" />
            </div>
           )}
            <div className={styles.textContainer}>
              <span className={`${styles.category} ${styles.food}`}>food</span>
              <h3 className={styles.postTitle}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
              </h3>
              <div className={styles.detail}>
                <span className={styles.username}>rahul modak</span>
                <span className={styles.date}>10.02.3230</span>
              </div>
            </div>
          </Link>
          <Link href="/" className={styles.item}>
          { withimage && (
            <div className={styles.imageContainer}>
              <Image className={styles.image} src="/p1.png" fill alt="tr" />
            </div>
           )}
            <div className={styles.textContainer}>
              <span className={`${styles.category} ${styles.fashion}`}>
                fashion
              </span>
              <h3 className={styles.postTitle}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
              </h3>
              <div className={styles.detail}>
                <span className={styles.username}>rahul modak</span>
                <span className={styles.date}>10.02.3230</span>
              </div>
            </div>
          </Link>
          <Link href="/" className={styles.item}>
          { withimage && (
            <div className={styles.imageContainer}>
              <Image className={styles.image} src="/p1.png" fill alt="tr" />
            </div>
           )}
            <div className={styles.textContainer}>
              <span className={`${styles.category} ${styles.gold}`}>gold</span>
              <h3 className={styles.postTitle}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
              </h3>
              <div className={styles.detail}>
                <span className={styles.username}>rahul modak</span>
                <span className={styles.date}>10.02.3230</span>
              </div>
            </div>
          </Link>
          <Link href="/" className={styles.item}>
           { withimage && (
            <div className={styles.imageContainer}>
              <Image className={styles.image} src="/p1.png" fill alt="tr" />
            </div>
           )}
            <div className={styles.textContainer}>
              <span className={`${styles.category} ${styles.travel}`}>
                Travel
              </span>
              <h3 className={styles.postTitle}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
              </h3>
              <div className={styles.detail}>
                <span className={styles.username}>rahul modak</span>
                <span className={styles.date}>10.02.3230</span>
              </div>
            </div>
          </Link>
        </div> */}
        <div className={styles.items}>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.png" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}>Travel</span>
          <h3 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>John Doe</span>
            <span className={styles.date}> - 10.03.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.png" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.culture}`}>
            Culture
          </span>
          <h3 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>John Doe</span>
            <span className={styles.date}> - 10.03.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.png" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.food}`}>Food</span>
          <h3 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>John Doe</span>
            <span className={styles.date}> - 10.03.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.png" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.fashion}`}>
            Fashion
          </span>
          <h3 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>John Doe</span>
            <span className={styles.date}> - 10.03.2023</span>
          </div>
        </div>
      </Link>
    </div>

        
   </>
  )
}

export default Menupost