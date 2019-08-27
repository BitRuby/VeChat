import React from "react";
import { Link } from "react-router-dom";
import classes from "./Contacts.module.css";
import Contact from "./contact/Contact";

const contacts = props => {
  const userList = props.users.map((el, index) => {
    return (
      <Link to={"/t/" + el.id} key={el.id}>
        <Contact
          username={el.username}
          isActive={el.active}
          imgSrc={props.imgArray[index]}
          style={el.style}
        />
      </Link>
    );
  });
  return <div className={classes.container}>{userList}</div>;
};

export default contacts;
