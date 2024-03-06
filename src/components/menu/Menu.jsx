import React from "react";
import styles from "./menu.module.css";

import Menupost from "../menupost/Menupost";
import Menucategory from "../menucategories/Menucategory";
const Menu = () => {
  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.subtitle}>{"What's hot"}</h2>
        <h1 className={styles.title}>Most popular</h1>
        <Menupost withImage={false} />
        <h2 className={styles.subtitle_1}>Discover by topic</h2>
        <h1 className={styles.title}>Categories</h1>

        <Menucategory />

        <h2 className={styles.subtitle}>Chosen by editor</h2>
        <h1 className={styles.title}>Editor's pick</h1>

        <Menupost withImage={true} />
      </div>
    </>
  );
};

export default Menu;
