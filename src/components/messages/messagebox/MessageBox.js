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
    return this.props.conversations.map(conversation => {
      if (conversation.users[1] === this.props.user.id) {
        return this.props.messages.map(message => {
          if (conversation.id === message.id) {
            return message.content.map(single => {
              return <Message data={single} key={single.id}></Message>;
            });
          } else {
            return null;
          }
        });
      } else {
        return null;
      }
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
