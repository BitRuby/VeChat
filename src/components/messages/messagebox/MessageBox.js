import React, { Component } from "react";
import Message from "./message/Message";
import styles from "./MessageBox.module.css";

class MessageBox extends Component {
  scrollToBottom = () => {
    this.el.scrollIntoView({
      block: "end"
    });
  };

  componentDidMount() {
    this.scrollToBottom();
  }
  componentDidUpdate() {
    this.scrollToBottom();
  }
  messages = () => {
    return this.props.messages.map(element => {
      console.log(element);
      return <Message data={element} key={element.id}></Message>;
    });
  };
  render() {
    return (
      <div className={styles.container}>
        {this.messages()}
        <span
          ref={el => {
            this.el = el;
          }}
        ></span>
      </div>
    );
  }
}

export default MessageBox;
