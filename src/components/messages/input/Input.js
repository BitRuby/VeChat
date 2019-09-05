import React from "react";
import styles from "./Input.module.css";
const input = props => {
  return (
    <form className={styles.container} onSubmit={props.onSubmit}>
      <input
        type="text"
        placeholder="Type a message"
        onChange={props.changed}
      />
      <button>Send</button>
    </form>
  );
};

export default input;
