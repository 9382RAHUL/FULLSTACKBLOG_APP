// "use client";

// import React, { useState } from "react";
// import styles from "@/app/write/writePage.module.css";
// import Image from "next/image";

// // import ReactQuill from "react-quill";
// // import "react-quill/dist/quill.bubble.css"
// // import "..//node_modules/react-quill/dist/quill.bubble.js"
// // import "..node_modules/react-quill/dist/quill.bubble.js"

// import ReactQuill from 'react-quill';
// // import 'react-quill/dist/quill.snow.css';
// import "node_modules/react-quill/dist/quill.bubble.css"

// const Write = () => {
//   const [open, setopen] = useState(false);
//   const [value,setvalue]=useState("");
//   return (
//     <>
//       <div className={styles.container}>
//         <input type="text" placeholder="title" />
//         <div className={styles.editor}>
//           <button className={styles.button} onClick={()=>{setopen(!open)}}>
//             <Image src="/plus.png" width={16} height={16} />
//           </button>
//         </div>
//         {open && (
//           <div className={styles.add}>
//             <button className={styles.addbutton}>
//               <Image src="/plus.png" width={16} height={16} />
//             </button>
//             <button className={styles.addbutton}>
//               <Image src="/plus.png" width={16} height={16} />
//             </button>
//             <button className={styles.addbutton}>
//               <Image src="/plus.png" width={16} height={16} />
//             </button>
//           </div>
//         )}
//         <ReactQuill className={styles.textarea} theme="snow" value={value} onChange={setvalue} placeholder="Tell your story"/>
//       </div>
//     </>
//   );
// };

// export default Write;

"use client";

import React, { useEffect, useState } from "react";
import styles from "@/app/write/writePage.module.css";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import Image from "next/image";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css"; // Corrected the import path
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { app } from "@/utils/firebase";
import dynamic from "next/dynamic";

const Write = () => {
  const { status } = useSession();
  // const ReactQuill=dynamic(()=>import('react-quill',{ssr:false}))
  const router = useRouter();
  const [file, setfile] = useState(null);
  const [open, setOpen] = useState(false); // Corrected the state variable name
  const [value, setValue] = useState(""); // Corrected the state variable name
  const [media,setmedia]=useState("")
  const [title,settitle]=useState("");

  useEffect(() => {
    const upload = () => {
      const name=new Date().getTime+file.name;
      const storageRef = ref(storage, name);
      const storage = getStorage(app);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setmedia(downloadURL)
          });
        }
      );
    };
    file && upload;
  }, [file]);
  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>;
  }
  if (status === "unauthenticated") {
    router.push("/");
  }
  const slugify = (str) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
  const handlesubmit=async()=>{
    const res=await fetch("/api/posts",{
      method:"POST",
      body:JSON.stringify({
        title,
        desc:value,
        img:media,
        slug:slugify(),
        catSlug:"travel"
      })
    })
    console.log(res)
  }

  return (
    <>
      <div className={styles.container}>
        <input type="text" placeholder="title" className={styles.input} onChange={(e)=>settitle(e.target.value)} />
        <input type="text"placeholder="category" />
        <div className={styles.editor}>
          <button
            className={styles.button}
            onClick={() => {
              setOpen(!open);
            }}
          >
            <Image src="/plusicon.png" width={16} height={16} />
          </button>
        </div>
        {open && (
          <div className={styles.add}>
            <input
              type="file"
              id="image"
              onChange={(e) => setfile(e.target.files[0])}
              // style={{"display":"none"}}
            />
            <button className={styles.addButton}>
              <Image src="/imageicon.png" width={16} height={16} />
            </button>
            <button className={styles.addButton}>
              <label htmlFor="image">
                <Image src="/external.png" width={16} height={16} />
              </label>
            </button>
            <button className={styles.addButton}>
              <Image src="/video.png" width={16} height={16} />
            </button>
          </div>
        )}
        <ReactQuill
          className={styles.textArea}
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your story"
        />
      </div>
      <button className={styles.publish} onClick={handlesubmit}>Publish</button>
    </>
  );
};

export default Write;
