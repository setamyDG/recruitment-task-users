import React, { FC } from 'react';
import { Home, Information } from '@views';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Routes: FC = () => (
  <BrowserRouter basename='/'>
    <Switch>
      <Route path='/' exact>
        <Home />
      </Route>
      <Route path='/information'>
        <Information />
      </Route>
      <Route path='*'>
        <div>404</div>
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
