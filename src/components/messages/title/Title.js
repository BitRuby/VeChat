import React from "react";
import styles from "./Title.module.css";
const title = props => {
  const sectionStyle = {
    background: props.user.style
  };
  return (
    <div className={styles.container}>
      <div style={sectionStyle} className={styles.image}>
        <img src={props.imgSrc} alt="" className={styles.img}/>
      </div>
      <p>{props.user.username}</p>
    </div>
  );
};

export default title;
