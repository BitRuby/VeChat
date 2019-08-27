import React from "react";
import styles from "./Message.module.css";
const message = props => {
  return (
    <React.Fragment>
      <div className={styles.messageFrom}>
        <p>{props.data.content}</p>
      </div>
      <div className={styles.messageTo}>
        <p>{props.data.content}</p>
      </div>
    </React.Fragment>
  );
};

export default message;
