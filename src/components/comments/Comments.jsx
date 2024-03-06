"use client";

import React, { useState } from "react";
import styles from "@/components/comments/comments.module.css";
import Link from "next/link";
import Image from "next/image";
import useSWR from "swr";
import { useSession } from "next-auth/react";
const fetcher = async (url) => {
  const res = await fetch(url);
  const data = awaitres.json();
  if (!res.ok) {
    const error = new Error(data.message);
    throw error;
  }
  return data;
};

const Comments = ({ postSlug }) => {
  const {status} = useSession();
  const { data, mutate,isLoading } = useSWR(
    `http://localhost:3000/api/comments?postSlug=${postSlug}`,
    fetcher
  );
  const [desc,setdesc]=useState("");
  const handlesubmit= async()=>{
    await fetch("/api/comments",{
      method:"POST",
      body: JSON.stringify({desc,postSlug})
    })
    mutate();
  }
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Comments </h1>
        {status == "authenticated" ? (
          <div className={styles.write}>
            <textarea
              placeholder="write a comment"
              className={styles.input}
              onChange={(e)=>setdesc(e.target.value)}
            ></textarea>
            <button className={styles.button} onClick={handlesubmit}>Send</button>
          </div>
        ) : (
          <Link href="/login">Logon to write a comment </Link>
        )}
        <div className={styles.comments}>
          {isLoading ?"loading": data.map((item)=>{
            return (
                <>
                <div className={styles.comment} key={item._id}>
            <div className={styles.user}>
             {item.user?.image&& <Image
                className={styles.image}
                src={item.user.image}
                // src="/p1.png"
                width={50}
                height={50}
              />}
              <div className={styles.userInfo}>
                <span className={styles.username}>{item.user.name}</span>
                <span className={styles.date}>{item.createdAt}</span>
              </div>
            </div>
            <p className={styles.desc}>
              {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              mollitia optio adipisci illum facilis vel, nam corrupti
              voluptates, eligendi aspernatur doloribus velit ipsum atque
              aliquid ipsam, esse blanditiis odit eveniet. */}
              {item.desc}
            </p>
          </div>
                </>
            )
          })}
        </div>
      </div>
    </>
  );
};

export default Comments;
