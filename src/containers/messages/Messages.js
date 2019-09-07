import React, { Component } from "react";
import styles from "./Messages.module.css";
import Input from "../../components/messages/input/Input";
import Title from "../../components/messages/title/Title";
import MessageBox from "../../components/messages/messagebox/MessageBox";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
class Messages extends Component {
  state = {
    input: null
  };
  inputChangeHandler = event => {
    this.setState({ input: event.target });
  };
  buttonSubmitHandler = event => {
    event.preventDefault();
    if (this.state.input === null || this.state.input.value === "" ) return;
    else {
      this.props.onMessageSubmit(this.props.user, this.state.input.value);
      const newState = { ...this.state };
      newState.input.value = "";
      this.setState({
        newState
      });
    }
  };
  render() {
    return (
      <div className={styles.container}>
        <Title user={this.props.user} imgSrc={this.props.img} />
        <MessageBox
          conversations={this.props.conversations}
          messages={this.props.messages}
          user={this.props.user}
          imgSrc={this.props.img}
        />
        <Input
          changed={this.inputChangeHandler}
          onSubmit={this.buttonSubmitHandler}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    conversations: state.conversations,
    messages: state.messages
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onMessageSubmit: (user, value) =>
      dispatch({ type: actions.MESSAGESUBMIT, user: user, value: value })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages);
