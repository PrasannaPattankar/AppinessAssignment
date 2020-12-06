import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Login from "./component/login/Login";
import Dashboard from "./component/dashboard/Dashboard";
import Layout from "./Layout";
class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Login} />
        <Layout>
          <Route path="/dashboard" component={Dashboard} />
        </Layout>
      </Switch>
    );
  }
}

export default App;
