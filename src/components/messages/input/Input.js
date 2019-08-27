import React from "react";
import styles from "./Input.module.css";
const input = () => {
  return (
    <div className={styles.container}>
      <input type="text" placeholder="Type a message" />
      <button>Send</button>
    </div>
  );
};

export default input;
