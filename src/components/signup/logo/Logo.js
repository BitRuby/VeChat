import React from "react";
import styles from "./Logo.module.css";

const logo = props => {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <div className={styles.foreground}></div>
      </div>
      <div className={styles.title}></div>
    </div>
  );
};

export default logo;
