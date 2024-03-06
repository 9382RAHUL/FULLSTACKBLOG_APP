import React from "react";
import styles from "./category.module.css";
import Link from "next/link";
import Image from "next/image";
const getdata = async () => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Could not load categories");
  }
  return await res.json();
};
const Categorylist = async () => {
  const data = await getdata();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>

      <div className={styles.categories}>
        {data?.map((item) => {
          return (
            <>
              <Link
                href="/bolg?cat==style"
                className={`${styles.category} ${styles[item.slug]}`}
                key={item._id}
              >
                {item.img &&(
                  <Image
                  src={item.img}
                  alt="cate"
                  width={32}
                  height={32}
                  className={styles.image}
                />
                )}
                {item.title}
              </Link>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Categorylist;
