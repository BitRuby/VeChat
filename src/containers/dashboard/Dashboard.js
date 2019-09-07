import React, { Component } from "react";
import Contacts from "../../components/contacts/Contacts";
import Messages from "../messages/Messages";
import styles from "./Dashboard.module.css";
import Elizabeth9329 from "../../assets/images/icons/Elizabeth9329.png";
import HotMegan11 from "../../assets/images/icons/HotMegan11.png";
import ShadowReact from "../../assets/images/icons/ShadowReact.png";
import ShyFox64 from "../../assets/images/icons/ShyFox64.png";
import TomWinks from "../../assets/images/icons/TomWinks.png";
class Dashboard extends Component {
  imgArray = [Elizabeth9329, TomWinks, ShadowReact, ShyFox64, HotMegan11];
  state = {
    users: [
      {
        id: "1",
        username: "Elizabeth9329",
        status: "active",
        style: "#03A9F4"
      },
      { id: "2", username: "TomWinks", status: "active", style: "#009688" },
      { id: "3", username: "ShadowReact", status: "offline", style: "#E91E63" },
      { id: "4", username: "ShyFox64", status: "offline", style: "#8BC34A" },
      { id: "5", username: "HotMegan11", status: "active", style: "#673AB7" }
    ]
  };

  selectUserHandler = () => {
    return this.state.users.map(user => {
      if (this.props.match.params.id === user.id) {
        return (
          <Messages
            user={user}
            key={user.id}
            img={this.imgArray[user.id - 1]}
          />
        );
      } else {
        return null;
      }
    });
  };

  render() {
    return (
      <div className={styles.container}>
        <Contacts users={this.state.users} imgArray={this.imgArray} />
        {this.selectUserHandler()}
      </div>
    );
  }
}

export default Dashboard;
