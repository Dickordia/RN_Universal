import React from 'react'

import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

import { routesMap } from '../utils/router'
import { Login as LoginScreen } from '../screens/Login/Login.screen'
import { Landscape as LandscapeScreen } from '../screens/Landscape/Landscape.screen'



const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* About routes */}
        <Route exact path={routesMap.login.root.path}>
          <LoginScreen />
        </Route>
        {/* Feature routes */}
        <Route exact path={routesMap.landscape.root.path}>
          <LandscapeScreen />
        </Route>
        {/* Default route */}
        <Route path="*">
          <Redirect to={routesMap.login.root.path} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export { Router };
