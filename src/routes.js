import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from './components/pages/Home';
import About from './components/pages/About';

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </div>
  );
};

export default Routes;
