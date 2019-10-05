import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './home';
import InfoScreen from './info';
import ReadScreen from './read';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/read/:code" component={InfoScreen} />
      <Route exact path="/read" component={ReadScreen} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
