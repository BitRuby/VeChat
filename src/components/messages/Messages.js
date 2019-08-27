import React, { Component } from "react";
import styles from "./Messages.module.css";
import Input from "./input/Input";
import Title from "./title/Title";
import MessageBox from "./messagebox/MessageBox";
class Messages extends Component {
  state = {
    conversations: [
      { id: "1", users: ["0", "1"] },
      { id: "2", users: ["0", "2"] },
      { id: "3", users: ["0", "3"] },
      { id: "4", users: ["0", "4"] },
      { id: "5", users: ["0", "5"] }
    ],
    messages: [
      {
        id: "1",
        convId: "1",
        content: "Hello!",
        date: "Sat Aug 24 2019 14:24:54"
      },
      {
        id: "2",
        convId: "1",
        content: "What's up!",
        date: "Sat Aug 24 2019 14:24:56"
      },
      {
        id: "3",
        convId: "1",
        content:
          "I'm here in house please come to me it would be nice midnight ;)",
        date: "Sat Aug 24 2019 14:24:56"
      },
      {
        id: "4",
        convId: "1",
        content: "xd!",
        date: "Sat Aug 24 2019 14:24:54"
      },
      {
        id: "5",
        convId: "1",
        content: "das!",
        date: "Sat Aug 24 2019 14:24:56"
      },
      {
        id: "6",
        convId: "1",
        content: "hye ;)",
        date: "Sat Aug 24 2019 14:24:58"
      },
      {
        id: "7",
        convId: "1",
        content:
          "I'm here in house please come to me it would be nice midnight ;)",
        date: "Sat Aug 24 2019 14:24:56"
      },
      {
        id: "8",
        convId: "1",
        content: "xd!",
        date: "Sat Aug 24 2019 14:24:54"
      },
      {
        id: "9",
        convId: "1",
        content: "das!",
        date: "Sat Aug 24 2019 14:24:56"
      },
      {
        id: "10",
        convId: "1",
        content: "hye ;)",
        date: "Sat Aug 24 2019 14:24:58"
      }
    ]
  };
  render() {
    return (
      <div className={styles.container}>
        <Title user={this.props.user} imgSrc={this.props.img} />
        <MessageBox
          conversations={this.state.conversations}
          messages={this.state.messages}
        />
        <Input />
      </div>
    );
  }
}

export default Messages;
