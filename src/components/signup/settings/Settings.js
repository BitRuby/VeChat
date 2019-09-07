import React from "react";
import styles from "./Settings.module.css";

const settings = props => {
  return (
    <form className={styles.containerSetting}>
      <h2 className={styles.title}>Quick chat with new friends!</h2>
      <div className={styles.avatarContain} onClick={props.modalHandler}>
        <img src={props.avatars} className={styles.avatar} alt="" />
      </div>
      <input
        type="text"
        className={styles.inputSetting}
        placeholder="Enter your unique nickname!"
        onChange={props.usernameHandler}
        value={props.username}
      />
      <button className={styles.buttonSetting} onClick={props.submitHandler}>
        Next step
      </button>
    </form>
  );
};

export default settings;
