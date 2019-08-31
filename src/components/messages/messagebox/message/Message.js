import React from "react";
import styles from "./Message.module.css";
const message = props => {
  const showMessages = () => {
    if (props.data.userId === "0") {
      return (
        <div className={styles.messageTo}>
          <p>{props.data.content}</p>
        </div>
      );
    } else {
      return (
        <div className={styles.messageFrom}>
          <div className={styles.image}>
            <img src={props.imgSrc} alt="" className={styles.img} />
          </div>
          <p>{props.data.content}</p>
        </div>
      );
    }
  };

  return <React.Fragment>{showMessages()}</React.Fragment>;
};

export default message;
