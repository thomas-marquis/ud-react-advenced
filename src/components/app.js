import { Route, Switch } from 'react-router-dom';
import React from 'react';

import Header from '../containers/header';
import Home from './home';
import Resources from './resources';
import requireAuthentication from '../helpers/require-authentication';

require('../style.css');

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/resources"
            component={requireAuthentication(Resources)}
          />
        </Switch>
      </div>
    );
  }
}
