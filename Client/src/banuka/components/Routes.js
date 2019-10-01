import React from "react";
import { Route, Switch } from "react-router-dom";

import Banuka from './Banuka'
import Dashboard from './Dashboard';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        
        <Route exact path="/banuka/dashboard" component={Dashboard} />
        
        <Route
          render={function () {
            return <h1>Not Found inside Banuka</h1>;
          }}
        />
      </Switch>
    );
  }
}

export default Routes;
