import React, { Component } from "react";
import Logo from "../../components/logo/Logo";
import classes from "./Signup.module.css";
class Signup extends Component {
  render() {
    return (
      <div className={classes.background}>
        <div className={classes.gradient}>
          <div className={classes.container}>
            <Logo />
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
