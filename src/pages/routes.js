import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './home';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
