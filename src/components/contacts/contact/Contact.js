import React from "react";
import styles from "./Contact.module.css";

const contact = props => {
  const sectionStyle = {
    background: props.style
  };
  return (
    <React.Fragment>
      <div style={sectionStyle} className={styles.image}>
        <img src={props.imgSrc} className={styles.img} alt="" />
      </div>
    </React.Fragment>
  );
};

export default contact;
