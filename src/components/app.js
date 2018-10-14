import { Route, Switch } from "react-router-dom";
import React, { Component } from "react";

import Header from "../containers/header";
import Home from "./home";
import Resources from "./resources";

require("../style.css");

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/resources" component={Resources} />
        </Switch>
      </div>
    );
  }
}
