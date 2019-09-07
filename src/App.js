import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Signup from "./containers/signup/Signup";
import { connect } from "react-redux";
import Dashboard from "./containers/dashboard/Dashboard";
class App extends Component {
  state = {
    firstLogin: true
  };

  render() {
    let routes = (
      <Switch>
        <Route path="/" exact component={Signup} />
        <Redirect to="/" />
      </Switch>
    );
    if (this.props.authenticated) {
      routes = (
        <Switch>
          <Route path="/" exact component={Signup} />
          <Route path="/t" exact component={Dashboard} />
          <Route path="/t/:id" exact component={Dashboard} />
        </Switch>
      );
    }
    return <div>{routes}</div>;
  }
}

const mapStateToProps = state => {
  return {
    authenticated: state.authenticated
  };
};

export default connect(mapStateToProps)(App);
