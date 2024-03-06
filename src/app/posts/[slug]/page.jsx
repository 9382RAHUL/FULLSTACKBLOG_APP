import React from "react";
// import styles from "@/app/[slug]/singlepage.module.css";
import Image from "next/image";
import Menu from "@/components/menu/Menu";
import Comments from "@/components/comments/Comments";
// import styles from "@/app/[slug]/singlepage.module.css"
import styles from "./singlepage.module.css";
// import styles from "@/app/"
const getdata = async (slug) => {
  try {
    const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
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
const Singlepage = async({params}) => {
  const {slug}=params;
  const data=await getdata(slug);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.infoContainer}>
          <div className={styles.textContainer}>
            <h1 className={styles.title}>
              {/* Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Perspiciatis, distinctio! */}
              {data?.title}
            </h1>
            <div className={styles.user}>
            {data?.user?.image &&  <div className={styles.userImageContainer}>
                {/* <Image src="/p1.png" fill alt="ss" className={styles.image} /> */}
                <Image src={data.user.image} fill alt="ss" className={styles.image} />
              </div>}
              <div className={styles.userTextContainer}>
                <span className={styles.username}>{data?.user.name}</span>
                <span className={styles.date}>10.02.23</span>
              </div>
            </div>
          </div>
        {data?.img &&  <div className={styles.imageContainer}>
            <Image src={data.img} fill alt="ss" className={styles.image} />
          </div>}
        </div>
        <div className={styles.content}>
          <div className={styles.post}>
            <div className={styles.description} dangerouslySetInnerHTML={{__html:data?.desc}}>

            {/* <h1>Lorem ipsum dolor sit amet.</h1>
              <p className={styles.desc}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem commodi provident rerum corporis neque ad totam
                reprehenderit possimus pariatur, illum enim error ipsum quisquam
                aut nostrum nemo repudiandae impedit. Soluta.
              </p>
              <h1>Lorem ipsum dolor sit amet.</h1>
              <p className={styles.desc}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem commodi provident rerum corporis neque ad totam
                reprehenderit possimus pariatur, illum enim error ipsum quisquam
                aut nostrum nemo repudiandae impedit. Soluta.
              </p>
              <h1>Lorem ipsum dolor sit amet.</h1>
              <p className={styles.desc}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem commodi provident rerum corporis neque ad totam
                reprehenderit possimus pariatur, illum enim error ipsum quisquam
                aut nostrum nemo repudiandae impedit. Soluta.
              </p>
              <h1>Lorem ipsum dolor sit amet.</h1>
              <p className={styles.desc}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem commodi provident rerum corporis neque ad totam
                reprehenderit possimus pariatur, illum enim error ipsum quisquam
                aut nostrum nemo repudiandae impedit. Soluta.
              </p>
              <h1>Lorem ipsum dolor sit amet.</h1>
              <p className={styles.desc}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem commodi provident rerum corporis neque ad totam
                reprehenderit possimus pariatur, illum enim error ipsum quisquam
                aut nostrum nemo repudiandae impedit. Soluta.
              </p> */}
            </div>
            <div className={styles.comment}>
                <Comments postSlug={slug}/>
            </div>
          </div>
          <Menu />
        </div>
      </div>
    </>
  );
};

export default Singlepage;
