import React, { Component } from "react";
import "./App.css";
import Users from "../../components/users/Users";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Users />
      </React.Fragment>
    );
  }
}

export default App;
