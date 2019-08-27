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
        content: [
          {
            id: "1",
            content: "Hello!",
            date: "Sat Aug 24 2019 14:24:54",
            userId: "0"
          },
          {
            id: "2",
            content: "What's up!",
            date: "Sat Aug 24 2019 14:24:56",
            userId: "1"
          },
          {
            id: "3",
            content:
              "I'm here in house please come to me it would be nice midnight ;)",
            date: "Sat Aug 24 2019 14:24:56",
            userId: "0"
          },
          {
            id: "4",
            content: "xd!",
            date: "Sat Aug 24 2019 14:24:54",
            userId: "1"
          },
          {
            id: "5",
            content: "das!",
            date: "Sat Aug 24 2019 14:24:56",
            userId: "0"
          },
          {
            id: "6",
            content: "hye ;)",
            date: "Sat Aug 24 2019 14:24:58",
            userId: "0"
          },
          {
            id: "7",
            content:
              "I'm here in house please come to me it would be nice midnight ;)",
            date: "Sat Aug 24 2019 14:24:56",
            userId: "0"
          },
          {
            id: "8",
            content: "xd!",
            date: "Sat Aug 24 2019 14:24:54",
            userId: "1"
          },
          {
            id: "9",
            content: "das!",
            date: "Sat Aug 24 2019 14:24:56",
            userId: "0"
          },
          {
            id: "10",
            content: "hye ;)",
            date: "Sat Aug 24 2019 14:24:58",
            userId: "1"
          }
        ]
      },
      {
        id: "2",
        content: [
          {
            id: "1",
            content: "Where are you?",
            date: "Sat Aug 24 2019 14:24:54",
            userId: "2"
          },
          {
            id: "2",
            content: "At home, why?",
            date: "Sat Aug 24 2019 14:29:12",
            userId: "0"
          }
        ]
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
          user={this.props.user}
          imgSrc={this.props.img}
        />
        <Input />
      </div>
    );
  }
}

export default Messages;
