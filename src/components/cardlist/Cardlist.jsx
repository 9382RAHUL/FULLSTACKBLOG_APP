import React from 'react'
import styles from './cardlist.module.css'
import Pagination from '../pagination/Pagination'
import Card from '../card/Card'
// const getdata = async (page) => {
//   const res = await fetch(`http://localhost:3000/api/posts?page=${page}`, {
//     cache: "no-store",
//   });
//   if (!res.ok) {
//     throw new Error("Could not load categories");
//   }
//   return  res.json();
// };

const getdata = async (page,cat) => {
  try {
    const res = await fetch(`http://localhost:3000/api/posts?page=${page}&cat=${cat || ""}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Could not load posts");
    }

    return await res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};
const Cardlist = async({page,cat}) => {
  const {posts,count}=await getdata(page,cat);

const POST_PER_PAGE=2;
  const hasprev=POST_PER_PAGE*(page-1)>0
  const hasnext=POST_PER_PAGE* (page-1)+POST_PER_PAGE<count
  return (
    <div className={styles.container}>
    <h1 className={styles.title}>Recent post</h1>
    <div className={styles.posts}>
    {
      posts?.map((item)=>{
        return (
          <>
          <Card item={item}key={item._id}/>

          </>
        )
      })
    }
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
  <Pagination page={page} hasprev={hasprev} hasnext={hasnext}/>
    </div>
  )
}

export default Cardlist