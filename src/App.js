import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Signup from "./containers/signup/Signup";
import Dashboard from "./containers/dashboard/Dashboard";
class App extends Component {
  state = {
    firstLogin: true
  };

  render() {
    return (
      <Switch>
        <Route path="/" exact component={Signup} />
        <Route path="/t" exact component={Dashboard} />
        <Route path="/t/:id" exact component={Dashboard} />
      </Switch>
    );
  }
}

export default App;
